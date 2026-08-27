@echo off
echo Cleaning broken install...
rmdir /s /q "%~dp0node_modules" 2>nul
rmdir /s /q "%LOCALAPPDATA%\npm-cache" 2>nul
rmdir /s /q "%LOCALAPPDATA%\Temp\cursor-sandbox-cache" 2>nul
del /q /f "%TEMP%\*.*" 2>nul
fsutil volume diskfree C:
echo.
echo If free bytes is under 2000000000 (2GB), free more space first!
echo.
cd /d "%~dp0"
npm install --no-fund --no-audit
if errorlevel 1 goto fail
npm run dev
goto end
:fail
echo Install failed - disk still full.
pause
:end
