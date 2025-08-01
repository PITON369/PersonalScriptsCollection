@echo off
REM includes Cyrillic alphabet
chcp 65001 >nul
setlocal enabledelayedexpansion

REM We get the day of the week
for /F "tokens=2 delims==" %%A in ('wmic path win32_localtime get dayofweek /value ^| find "="') do (
    set "DayOfWeekRaw=%%A"
)

REM We reduce it to a number (cuts off spaces)
set /a DayOfWeek=DayOfWeekRaw

echo Today is the day of the week: !DayOfWeek!

if "!DayOfWeek!"=="1" goto continue
if "!DayOfWeek!"=="5" goto continue

echo It's not Monday or Friday. The script is completed.
timeout /t 2 >nul
exit /b

:continue
echo Today is the right day! We proceed further...
pause
start Obsidian.lnk
start SourceTree.lnk

start "" "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\devenv.exe" "D:\git\Project.sln"



