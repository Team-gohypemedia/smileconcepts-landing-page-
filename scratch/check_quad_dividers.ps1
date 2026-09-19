Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "before-after-4.jpg")

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    $w = $bmp.Width
    $h = $bmp.Height
    $midX = [int]($w / 2)
    $midY = [int]($h / 2)

    # Check vertical line in top half
    $topVertWhite = 0
    for ($y = 10; $y -lt $midY - 10; $y += 5) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230) { $topVertWhite++ }
    }

    # Check vertical line in bottom half
    $botVertWhite = 0
    for ($y = $midY + 10; $y -lt $h - 10; $y += 5) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230) { $botVertWhite++ }
    }

    Write-Host "$($f): Top vertical white line: $topVertWhite, Bottom vertical white line: $botVertWhite (out of $([int]($midY/5)))"
    $bmp.Dispose()
}
