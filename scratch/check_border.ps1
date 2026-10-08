Add-Type -AssemblyName System.Drawing

$b = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\assets\footer-cases\card-1.png")
Write-Host "Top-left pixel: $($b.GetPixel(0,0))"
Write-Host "Center pixel: $($b.GetPixel(73, 74))"
$b.Dispose()
