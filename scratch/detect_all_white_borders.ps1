Add-Type -AssemblyName System.Drawing
$galleryFiles = Get-ChildItem "e:\smileconcepts\public\images\gallery\case-*.jpg"
foreach ($f in $galleryFiles) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    $w = $bmp.Width
    $h = $bmp.Height
    $midY = [int]($h / 2)
    
    # Check left edge x=0..30
    $leftWhite = 0
    for ($x = 0; $x -lt 60; $x++) {
        $c = $bmp.GetPixel($x, $midY)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $leftWhite++
        } else {
            break
        }
    }

    # Check right edge
    $rightWhite = 0
    for ($x = $w - 1; $x -ge ($w - 60); $x--) {
        $c = $bmp.GetPixel($x, $midY)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $rightWhite++
        } else {
            break
        }
    }

    Write-Host "$($f.Name): $w x $h | Left white: $leftWhite px | Right white: $rightWhite px"
    $bmp.Dispose()
}
