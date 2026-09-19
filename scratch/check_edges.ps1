Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('e:/smileconcepts/public/images/gallery/case-smile-1-before.jpg')
$w = $bmp.Width
$h = $bmp.Height
Write-Host "Dimensions: $w x $h"
$testXs = @(0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 150, ($w - 150), ($w - 100), ($w - 50), ($w - 20), ($w - 1))
foreach ($x in $testXs) {
    $c = $bmp.GetPixel($x, [int]($h/2))
    Write-Host "x=$x : R=$($c.R) G=$($c.G) B=$($c.B)"
}
$bmp.Dispose()
