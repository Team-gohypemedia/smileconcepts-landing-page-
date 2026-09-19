Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "before-after-4.jpg")

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    Write-Host "=== $f ($($bmp.Width) x $($bmp.Height)) ==="
    # Sample top-left, top-right, bottom-left, bottom-right
    Write-Host "TL: $(($bmp.GetPixel(50, 50)).ToString())"
    Write-Host "TR: $(($bmp.GetPixel($bmp.Width - 50, 50)).ToString())"
    Write-Host "BL: $(($bmp.GetPixel(50, $bmp.Height - 50)).ToString())"
    Write-Host "BR: $(($bmp.GetPixel($bmp.Width - 50, $bmp.Height - 50)).ToString())"
    $bmp.Dispose()
}
