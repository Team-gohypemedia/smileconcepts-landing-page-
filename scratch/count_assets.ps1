$dirs = Get-ChildItem "public/assets" -Directory
foreach ($d in $dirs) {
    $count = (Get-ChildItem $d.FullName -File).Count
    Write-Host "$($d.Name): $count files"
}
