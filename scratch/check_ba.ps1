Add-Type -AssemblyName System.Drawing
$p = "e:\smileconcepts\public\images\hero\homepage-ba.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)
$w = $bmp.Width
$h = $bmp.Height
Write-Host "Width:" $w "Height:" $h
# If it is 746 x 424, let's see if left-half and right-half or top/bottom
$bmp.Dispose()
