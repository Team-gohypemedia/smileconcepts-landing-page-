Add-Type -AssemblyName System.Drawing

$p = "e:\smileconcepts\public\images\gallery\gallery-1.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)
Write-Host "gallery-1: $($bmp.Width) x $($bmp.Height)"

# Let's inspect what is in the image
$bmp.Dispose()
