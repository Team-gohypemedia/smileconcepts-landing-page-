Add-Type -AssemblyName System.Drawing

$src = "e:\smileconcepts\public\images\gallery\before-after-4.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height
Write-Host "Source: $w x $h"

foreach ($y in @(50, 100, 150, 200, 400, 450, 500)) {
    $left = 0
    for ($x = 0; $x -lt 60; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            $left = $x
            break
        }
    }
    $right = $w - 1
    for ($x = $w - 1; $x -ge ($w - 60); $x--) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            $right = $x
            break
        }
    }
    Write-Host "y=$y : left non-white=$left, right non-white=$right"
}
$bmp.Dispose()
