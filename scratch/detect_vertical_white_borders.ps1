Add-Type -AssemblyName System.Drawing
$galleryFiles = Get-ChildItem "e:\smileconcepts\public\images\gallery\case-*.jpg"
foreach ($f in $galleryFiles) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    $w = $bmp.Width
    $h = $bmp.Height
    $midX = [int]($w / 2)
    
    # Check top edge y=0..30
    $topWhite = 0
    for ($y = 0; $y -lt 30; $y++) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $topWhite++
        } else {
            break
        }
    }

    # Check bottom edge
    $bottomWhite = 0
    for ($y = $h - 1; $y -ge ($h - 30); $y--) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $bottomWhite++
        } else {
            break
        }
    }

    Write-Host "$($f.Name): Top white: $topWhite px | Bottom white: $bottomWhite px"
    $bmp.Dispose()
}
