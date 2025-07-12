Write-Host "Запуск очистки от файлов .pbd"
$temp="0"
$PathToDir="D:\ConstrPSBin\ConstrPSBin_Rx64"
Push-Location "$PathToDir"
foreach($File in Get-ChildItem -Path "$PathToDir" -Recurse -File)
	{
		[Boolean]$validExt = ($File.Extension -eq ".pdb")
		if($validExt)
		{
			$temp=$File.FullName
            
            Write-Host "Remove $temp"
            Remove-Item -Path "$temp" -Force
		}
		
	}
Write-Host "All removed"
Pop-Location