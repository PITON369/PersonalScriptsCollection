Get-ChildItem -Path 'D:\git\' -Recurse | Select-String -Pattern 'String'

$PathToDirectory='D:\git\'
$FirstString='String'
$SecondString='NewString'

Get-ChildItem -Path $PathToDirectory -Recurse -File| Select-String -Pattern $FirstString | ForEach-Object {
     $filePath = $_.Path
     $lineNumber = $_.LineNumber
     $newLine = $_.Line -replace $FirstString, $SecondString
     $content = Get-Content $filePath
     $content[$lineNumber - 1] = $newLine
     $content | Set-Content $filePath
  }