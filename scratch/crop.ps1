Add-Type -AssemblyName System.Drawing

$srcPath = "e:\smileconcepts\public\images\gallery\before-after-4.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = $bmp.Width
$h = $bmp.Height
$halfH = [int]($h / 2)

# Top half: Before
$rectBefore = New-Object System.Drawing.Rectangle(0, 0, $w, $halfH)
$bmpBefore = $bmp.Clone($rectBefore, $bmp.PixelFormat)
$bmpBefore.Save("e:\smileconcepts\public\images\gallery\case4-before.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpBefore.Dispose()

# Bottom half: After
$rectAfter = New-Object System.Drawing.Rectangle(0, $halfH, $w, ($h - $halfH))
$bmpAfter = $bmp.Clone($rectAfter, $bmp.PixelFormat)
$bmpAfter.Save("e:\smileconcepts\public\images\gallery\case4-after.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpAfter.Dispose()

$bmp.Dispose()
Write-Host "Successfully cropped case4-before.jpg and case4-after.jpg ($w x $halfH)"
