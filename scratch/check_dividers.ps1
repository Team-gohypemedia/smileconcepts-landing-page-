Add-Type -AssemblyName System.Drawing

$files = @("gallery-1.jpg", "gallery-2.jpg", "sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "before-after-4.jpg")

foreach ($f in $files) {
    $src = "e:\smileconcepts\public\images\gallery\" + $f
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $w = $bmp.Width
    $h = $bmp.Height

    # Check vertical center divider (x = w/2)
    $vertLine = 0
    for ($y = 0; $y -lt $h; $y += 10) {
        $c = $bmp.GetPixel([int]($w/2), $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) { $vertLine++ }
    }

    # Check horizontal center divider (y = h/2)
    $horizLine = 0
    for ($x = 0; $x -lt $w; $x += 10) {
        $c = $bmp.GetPixel($x, [int]($h/2))
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) { $horizLine++ }
    }

    Write-Host "$($f) - Vertical divider: $vertLine / $([int]($h/10)), Horizontal divider: $horizLine / $([int]($w/10))"
    $bmp.Dispose()
}
