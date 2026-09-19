Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "porcelain-veneers.jpg", "kylie-veneers.jpg")

foreach ($name in $files) {
    $path = "e:\smileconcepts\public\images\gallery\" + $name
    $bmp = [System.Drawing.Bitmap]::FromFile($path)
    $w = $bmp.Width
    $h = $bmp.Height
    $midY = [int]($h / 2)

    # Check horizontal divider line in middle +/- 10px
    $whiteLine = 0
    for ($x = 0; $x -lt $w; $x += 10) {
        $c = $bmp.GetPixel($x, $midY)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $whiteLine++
        }
    }
    Write-Host "$name ($w x $h): white pixels at center line: $whiteLine / $([int]($w/10))"
    $bmp.Dispose()
}
