Add-Type -AssemblyName System.Drawing

$cases = @(
    @{ name = "case-allon4-1"; file = "sc2.jpg" },
    @{ name = "case-allon4-2"; file = "sc3.jpg" },
    @{ name = "case-fullarch-1"; file = "sc4.jpg" },
    @{ name = "case-fullarch-2"; file = "sc5.jpg" },
    @{ name = "case-zirconia-1"; file = "gallery-1.jpg" },
    @{ name = "case-zirconia-2"; file = "gallery-2.jpg" },
    @{ name = "case-smile-1"; file = "before-after-4.jpg" }
)

foreach ($c in $cases) {
    $src = "e:\smileconcepts\public\images\gallery\" + $c.file
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $w = $bmp.Width
    $h = $bmp.Height
    $midY = [int]($h / 2)

    # Detect left non-white boundary
    $left = 0
    for ($x = 0; $x -lt 60; $x++) {
        $cPixel = $bmp.GetPixel($x, $midY)
        if ($cPixel.R -lt 235 -or $cPixel.G -lt 235 -or $cPixel.B -lt 235) {
            $left = $x
            break
        }
    }

    # Detect right non-white boundary
    $right = $w - 1
    for ($x = $w - 1; $x -ge ($w - 60); $x--) {
        $cPixel = $bmp.GetPixel($x, $midY)
        if ($cPixel.R -lt 235 -or $cPixel.G -lt 235 -or $cPixel.B -lt 235) {
            $right = $x
            break
        }
    }

    Write-Host "$($c.file) ($w x $h): Left bound = $left, Right bound = $right, Content Width = $($right - $left + 1)"
    $bmp.Dispose()
}
