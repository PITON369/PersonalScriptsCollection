#Select-String -Path 'D:\git' -Pattern "TO DO"
#Without output to a file Get-ChildItem -Path 'D:\git\*' -Recurse | Select-String -Pattern 'TO DO'
Get-ChildItem -Path 'D:\git\*' -Recurse | Select-String -Pattern 'TO DO' > 1OutputFindPS.txt
#C:\git\1OutputFindPS.txt
#notepad 1OutputFindPS.txt