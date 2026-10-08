Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem "e:\smileconcepts\public\assets\before-after\*.jpg"
foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    Write-Host "$($f.Name) : $($bmp.Width) x $($bmp.Height)"
    $bmp.Dispose()
}
