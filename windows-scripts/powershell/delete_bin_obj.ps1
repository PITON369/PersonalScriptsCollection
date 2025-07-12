$path = "C:\git\Messenger"

Get-ChildItem -Path $path -Directory -Recurse -Filter "bin" | ForEach-Object {
    Remove-Item -Path $_.FullName -Recurse -Force
    Write-Host "The folder was deleted: $($_.FullName)"
}

Get-ChildItem -Path $path -Directory -Recurse -Filter "obj" | ForEach-Object {
    Remove-Item -Path $_.FullName -Recurse -Force
    Write-Host "The folder was deleted: $($_.FullName)"
}