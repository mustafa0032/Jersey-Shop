@echo off
title JerseyBase Shop
echo.
echo  Starting JerseyBase Shop...
echo.

:: Try node first
where node >nul 2>&1
if %errorlevel% == 0 (
    start "" "http://localhost:8080"
    node "%~dp0serve.js"
    goto end
)

:: Fallback to Python
where python >nul 2>&1
if %errorlevel% == 0 (
    start "" "http://localhost:8080"
    python -m http.server 8080 --directory "%~dp0"
    goto end
)

where python3 >nul 2>&1
if %errorlevel% == 0 (
    start "" "http://localhost:8080"
    python3 -m http.server 8080 --directory "%~dp0"
    goto end
)

echo  ERROR: Node.js or Python is required but not found.
echo  Please install Node.js from https://nodejs.org
pause

:end
