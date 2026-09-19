Add-Type -AssemblyName System.Drawing

# Let's inspect gallery-1.jpg and sc2.jpg
# Is the left half BEFORE and the right half AFTER?
$src = "e:\smileconcepts\public\images\gallery\gallery-1.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

# If the left half is Before and right half is After, then:
# Left half: x from 0 to w/2
# Right half: x from w/2 to w
# Let's save them and see!
$halfW = [int]($w / 2)

$rectLeft = New-Object System.Drawing.Rectangle(0, 0, $halfW, $h)
$bmpLeft = $bmp.Clone($rectLeft, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$bmpLeft.Save("e:\smileconcepts\public\images\gallery\test-g1-left.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpLeft.Dispose()

$rectRight = New-Object System.Drawing.Rectangle($halfW, 0, ($w - $halfW), $h)
$bmpRight = $bmp.Clone($rectRight, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$bmpRight.Save("e:\smileconcepts\public\images\gallery\test-g1-right.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpRight.Dispose()

$bmp.Dispose()
Write-Host "Saved test-g1-left ($halfW x $h) and test-g1-right ($halfW x $h)"
