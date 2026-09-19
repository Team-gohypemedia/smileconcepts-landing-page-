Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "before-after-4.jpg")

foreach ($file in $files) {
    $src = "e:\smileconcepts\public\images\gallery\" + $file
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $w = $bmp.Width
    $h = $bmp.Height

    $midX = [int]($w / 2)

    # Top edge
    $top = 0
    for ($y = 0; $y -lt 60; $y++) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $top = $y
            break
        }
    }

    # Bottom edge
    $bottom = $h - 1
    for ($y = $h - 1; $y -ge ($h - 60); $y--) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $bottom = $y
            break
        }
    }

    # Center divider around midY
    $midY = [int]($h / 2)
    $dividerTop = $midY
    for ($y = $midY; $y -ge ($midY - 40); $y--) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $dividerTop = $y + 1
            break
        }
    }
    $dividerBottom = $midY
    for ($y = $midY; $y -le ($midY + 40); $y++) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $dividerBottom = $y - 1
            break
        }
    }

    Write-Host "$file : Top white=$top, Bottom white=$($h - 1 - $bottom), Divider=$dividerTop to $dividerBottom"
    $bmp.Dispose()
}
