@echo off
echo Fixing Git Index...
if exist ".git\index.lock" del /f /q ".git\index.lock"
if exist ".git\index" del /f /q ".git\index"
git reset
git status
echo Git index successfully restored!
pause

