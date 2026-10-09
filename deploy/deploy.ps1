# 本机构建并上传到 ECS
# 用法（在项目根目录）:
#   .\deploy\deploy.ps1
#   .\deploy\deploy.ps1 -User root -HostIp 8.133.224.247 -KeyPath "$env:USERPROFILE\.ssh\id_rsa"

param(
  [string]$HostIp = "8.133.224.247",
  [string]$User = "root",
  [string]$RemoteDir = "/var/www/robotopia",
  [string]$KeyPath = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

Write-Host "==> npm ci / build" -ForegroundColor Cyan
npm ci
npm run build

if (-not (Test-Path "$Root\out\index.html")) {
  throw "构建失败：找不到 out\index.html"
}

$scpArgs = @("-r", "out\*")
if ($KeyPath -ne "") {
  if (-not (Test-Path $KeyPath)) { throw "密钥不存在: $KeyPath" }
  $scpArgs = @("-i", $KeyPath) + $scpArgs
}

Write-Host "==> 上传到 ${User}@${HostIp}:${RemoteDir}" -ForegroundColor Cyan
# 确保远程目录存在
$sshBase = @()
if ($KeyPath -ne "") { $sshBase = @("-i", $KeyPath) }

& ssh @sshBase "${User}@${HostIp}" "mkdir -p $RemoteDir"
& scp @scpArgs "${User}@${HostIp}:${RemoteDir}/"

Write-Host "==> 修正权限" -ForegroundColor Cyan
& ssh @sshBase "${User}@${HostIp}" "chown -R nginx:nginx $RemoteDir 2>/dev/null; chmod -R a+rX $RemoteDir"

Write-Host ""
Write-Host "部署完成: http://${HostIp}" -ForegroundColor Green
Write-Host "域名就绪后: https://robotopia-ai.com" -ForegroundColor Green
