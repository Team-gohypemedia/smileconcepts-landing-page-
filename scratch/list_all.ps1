Add-Type -AssemblyName System.Drawing

# Let's inspect each image
$all = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "before-after-4.jpg", "kylie-veneers.jpg", "porcelain-veneers.jpg")

foreach ($f in $all) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    Write-Host "File: $f ($($bmp.Width) x $($bmp.Height))"
    $bmp.Dispose()
}
