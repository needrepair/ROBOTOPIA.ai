@echo off
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 exit /b 1
)

echo.
echo Starting local preview at http://localhost:3000
echo Press Ctrl+C to stop.
echo.
call npm run dev
