Add-Type -AssemblyName System.Drawing
$p = "e:\smileconcepts\public\images\hero\homepage-ba.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)
$w = $bmp.Width
$h = $bmp.Height

# Check if left/right split (746 x 424 is ~16:9, likely side-by-side)
$halfW = [int]($w / 2)
$rectL = New-Object System.Drawing.Rectangle(0, 0, $halfW, $h)
$bmpL = $bmp.Clone($rectL, $bmp.PixelFormat)
$bmpL.Save("e:\smileconcepts\public\images\gallery\case1-before.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpL.Dispose()

$rectR = New-Object System.Drawing.Rectangle($halfW, 0, ($w - $halfW), $h)
$bmpR = $bmp.Clone($rectR, $bmp.PixelFormat)
$bmpR.Save("e:\smileconcepts\public\images\gallery\case1-after.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpR.Dispose()

$bmp.Dispose()
Write-Host "Cropped case1-before and case1-after"
