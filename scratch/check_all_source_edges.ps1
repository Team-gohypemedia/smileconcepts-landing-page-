Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg")

foreach ($file in $files) {
    $src = "e:\smileconcepts\public\images\gallery\" + $file
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $w = $bmp.Width
    $h = $bmp.Height

    $y = [int]($h * 0.25)
    $left = 0
    for ($x = 0; $x -lt 80; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $left = $x
            break
        }
    }
    $right = $w - 1
    for ($x = $w - 1; $x -ge ($w - 80); $x--) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $right = $x
            break
        }
    }
    Write-Host "$file : y=$y | left non-white=$left, right non-white=$right, total w=$w"
    $bmp.Dispose()
}
