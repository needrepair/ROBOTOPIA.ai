#!/usr/bin/env bash
# 在 ECS 上执行一次（root 或 sudo）
# 用法: sudo bash setup-server.sh

set -euo pipefail

echo "==> 安装 Nginx"
if command -v dnf >/dev/null 2>&1; then
  dnf install -y nginx
elif command -v yum >/dev/null 2>&1; then
  yum install -y nginx
else
  echo "未找到 dnf/yum，请手动安装 nginx"
  exit 1
fi

echo "==> 创建站点目录"
mkdir -p /var/www/robotopia
chown -R nginx:nginx /var/www/robotopia 2>/dev/null || chown -R www-data:www-data /var/www/robotopia 2>/dev/null || true

echo "==> 写入 Nginx 配置"
cat > /etc/nginx/conf.d/robotopia.conf <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name robotopia-ai.com www.robotopia-ai.com 8.133.224.247;

    root /var/www/robotopia;
    index index.html;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff2?)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
}
EOF

# 若存在默认欢迎页站点，避免抢占 80 端口
if [ -f /etc/nginx/conf.d/default.conf ]; then
  mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
fi

echo "==> 检查并启动 Nginx"
nginx -t
systemctl enable nginx
systemctl restart nginx

# 防火墙（若开了 firewalld）
if command -v firewall-cmd >/dev/null 2>&1 && systemctl is-active --quiet firewalld; then
  firewall-cmd --permanent --add-service=http
  firewall-cmd --permanent --add-service=https
  firewall-cmd --reload
  echo "==> firewalld 已放行 80/443"
fi

echo ""
echo "完成。请确认阿里云安全组已放行 TCP 80 和 443。"
echo "上传站点后访问: http://8.133.224.247"
echo "域名备案通过后解析 A 记录到 8.133.224.247，再配置 HTTPS。"
