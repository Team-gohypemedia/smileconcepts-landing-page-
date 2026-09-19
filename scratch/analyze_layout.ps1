Add-Type -AssemblyName System.Drawing

# Let's inspect sc2.jpg, sc3.jpg, gallery-1.jpg
# We will check if there is text "BEFORE" and "AFTER" written on them, and where it is located!
$files = @("sc2.jpg", "gallery-1.jpg", "before-after-4.jpg")

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    Write-Host "File: $f ($($bmp.Width) x $($bmp.Height))"
    # Check left vs right brightness
    $leftBright = 0
    $rightBright = 0
    for ($y = 100; $y -lt $bmp.Height - 100; $y += 20) {
        for ($x = 50; $x -lt ($bmp.Width/2) - 50; $x += 20) {
            $c = $bmp.GetPixel($x, $y)
            $leftBright += ($c.R + $c.G + $c.B)
        }
        for ($x = ($bmp.Width/2) + 50; $x -lt $bmp.Width - 50; $x += 20) {
            $c = $bmp.GetPixel($x, $y)
            $rightBright += ($c.R + $c.G + $c.B)
        }
    }
    Write-Host "Left half brightness: $leftBright, Right half brightness: $rightBright"
    
    # Check top vs bottom brightness
    $topBright = 0
    $bottomBright = 0
    for ($x = 50; $x -lt $bmp.Width - 50; $x += 20) {
        for ($y = 50; $y -lt ($bmp.Height/2) - 50; $y += 20) {
            $c = $bmp.GetPixel($x, $y)
            $topBright += ($c.R + $c.G + $c.B)
        }
        for ($y = ($bmp.Height/2) + 50; $y -lt $bmp.Height - 50; $y += 20) {
            $c = $bmp.GetPixel($x, $y)
            $bottomBright += ($c.R + $c.G + $c.B)
        }
    }
    Write-Host "Top half brightness: $topBright, Bottom half brightness: $bottomBright"
    $bmp.Dispose()
}
