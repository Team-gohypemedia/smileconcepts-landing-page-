Add-Type -AssemblyName System.Drawing
$p = "e:\smileconcepts\public\images\gallery\gallery-1.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)
Write-Host "gallery-1 total size: $($bmp.Width) x $($bmp.Height)"

# In gallery-1.jpg, is it a 4-quadrant collage? Or what is it?
# Let's sample colors in 4 quadrants:
# Q1: Top-left (w/4, h/4)
# Q2: Top-right (3w/4, h/4)
# Q3: Bottom-left (w/4, 3h/4)
# Q4: Bottom-right (3w/4, 3h/4)
$w = $bmp.Width
$h = $bmp.Height

Write-Host "Top-Left sample: " $bmp.GetPixel([int]($w*0.25), [int]($h*0.25))
Write-Host "Top-Right sample: " $bmp.GetPixel([int]($w*0.75), [int]($h*0.25))
Write-Host "Bottom-Left sample: " $bmp.GetPixel([int]($w*0.25), [int]($h*0.75))
Write-Host "Bottom-Right sample: " $bmp.GetPixel([int]($w*0.75), [int]($h*0.75))

$bmp.Dispose()
