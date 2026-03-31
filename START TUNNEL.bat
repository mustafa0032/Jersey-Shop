@echo off
title JersHub - Cloudflare Tunnel
color 0A

echo.
echo  ==========================================
echo    JersHub ^| Cloudflare Tunnel
echo  ==========================================
echo.

:: ── 1. Download cloudflared if not present ─────────────────────────
if not exist "%~dp0cloudflared.exe" (
    echo  [1/3] cloudflared.exe nicht gefunden. Wird heruntergeladen...
    echo.
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile '%~dp0cloudflared.exe'"
    if errorlevel 1 (
        echo  FEHLER: Download fehlgeschlagen. Bitte manuell herunterladen:
        echo  https://github.com/cloudflare/cloudflared/releases/latest
        pause
        exit /b 1
    )
    echo  cloudflared.exe heruntergeladen!
    echo.
) else (
    echo  [1/3] cloudflared.exe gefunden.
)

:: ── 2. Start local server ───────────────────────────────────────────
echo  [2/3] Starte lokalen Server auf Port 8080...
if exist "%~dp0serve.js" (
    start /min "JersHub Server" cmd /c "node "%~dp0serve.js""
) else (
    start /min "JersHub Server" cmd /c "python -m http.server 8080 --directory "%~dp0""
)

:: Wait for server to be ready
timeout /t 3 /nobreak > nul
echo  Server laeuft auf http://localhost:8080
echo.

:: ── 3. Start Cloudflare Tunnel ──────────────────────────────────────
echo  [3/3] Starte Cloudflare Tunnel...
echo.
echo  ==========================================
echo   Deine oeffentliche URL erscheint unten.
echo   Teile sie mit deinen Kunden!
echo  ==========================================
echo.

"%~dp0cloudflared.exe" tunnel --url http://localhost:8080

echo.
echo  Tunnel beendet. Druecke eine Taste zum Schliessen.
pause > nul
