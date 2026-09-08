Write-Host "Fixing Git Index on Windows..." -ForegroundColor Cyan
if (Test-Path ".git\index.lock") { Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue }
if (Test-Path ".git\index") { Remove-Item ".git\index" -Force -ErrorAction SilentlyContinue }
git reset
git status
Write-Host "Git index successfully restored and verified!" -ForegroundColor Green

