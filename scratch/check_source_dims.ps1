Add-Type -AssemblyName System.Drawing

for ($i = 1; $i -le 6; $i++) {
    $f = "e:\smileconcepts\public\assets\footer-cases\source\source-$i.jpg"
    $bmp = [System.Drawing.Bitmap]::FromFile($f)
    Write-Host "source-$i : $($bmp.Width) x $($bmp.Height)"
    $bmp.Dispose()
}
