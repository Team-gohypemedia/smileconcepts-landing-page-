Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg")

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    # Check if there is a vertical red/white divider down the center x = 540
    # In gallery-1, we saw the vertical dividing line down the center!
    $redDivider = 0
    $midX = 540
    for ($y = 100; $y -lt 980; $y += 10) {
        $c = $bmp.GetPixel($midX, $y)
        # Check red/orange line
        if ($c.R -gt 180 -and $c.G -lt 120 -and $c.B -lt 120) {
            $redDivider++
        }
    }
    Write-Host "$f - center vertical red line: $redDivider / 88"
    $bmp.Dispose()
}
