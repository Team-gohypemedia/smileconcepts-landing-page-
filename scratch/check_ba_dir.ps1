Add-Type -AssemblyName System.Drawing

$dir = "e:\smileconcepts\public\assets\before-after"
$files = Get-ChildItem $dir -Filter "*.jpg"

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    Write-Host "$($f.Name): $($bmp.Width) x $($bmp.Height)"
    $bmp.Dispose()
}
