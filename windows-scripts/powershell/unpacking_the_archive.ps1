$shell = New-Object -ComObject shell.application
$zip = $shell.NameSpace("C:\Script\a.zip")
MkDir("C:\Script\a\a")
foreach ($item in $zip.items()) {
  $shell.Namespace("C:\Script\a").CopyHere($item)
}