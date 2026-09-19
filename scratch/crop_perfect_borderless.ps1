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

function Get-ContentBounds($bmp) {
    $w = $bmp.Width
    $h = $bmp.Height
    $midY = [int]($h / 2)
    $q1Y = [int]($h * 0.25)
    $q3Y = [int]($h * 0.75)

    # 1. Detect Left Edge (search up to 80px)
    $left = 0
    for ($x = 0; $x -lt 80; $x++) {
        $c1 = $bmp.GetPixel($x, $q1Y)
        $c2 = $bmp.GetPixel($x, $q3Y)
        $isWhite1 = ($c1.R -gt 238 -and $c1.G -gt 238 -and $c1.B -gt 238)
        $isWhite2 = ($c2.R -gt 238 -and $c2.G -gt 238 -and $c2.B -gt 238)
        if (-not $isWhite1 -or -not $isWhite2) {
            $left = $x + 1 # 1px safety margin into content
            break
        }
    }

    # 2. Detect Right Edge
    $right = $w - 1
    for ($x = $w - 1; $x -ge ($w - 80); $x--) {
        $c1 = $bmp.GetPixel($x, $q1Y)
        $c2 = $bmp.GetPixel($x, $q3Y)
        $isWhite1 = ($c1.R -gt 238 -and $c1.G -gt 238 -and $c1.B -gt 238)
        $isWhite2 = ($c2.R -gt 238 -and $c2.G -gt 238 -and $c2.B -gt 238)
        if (-not $isWhite1 -or -not $isWhite2) {
            $right = $x - 1 # 1px safety margin into content
            break
        }
    }

    # 3. Detect Top Edge
    $midX = [int]($w / 2)
    $top = 0
    for ($y = 0; $y -lt 60; $y++) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $top = $y + 1 # 1px safety into content
            break
        }
    }

    # 4. Detect Bottom Edge
    $bottom = $h - 1
    for ($y = $h - 1; $y -ge ($h - 60); $y--) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $bottom = $y - 1 # 1px safety into content
            break
        }
    }

    # 5. Detect Center Divider
    $divTop = $midY
    for ($y = $midY; $y -ge ($midY - 45); $y--) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $divTop = $y # last non-white pixel of top half
            break
        }
    }

    $divBottom = $midY
    for ($y = $midY; $y -le ($midY + 45); $y++) {
        $c = $bmp.GetPixel($midX, $y)
        if ($c.R -lt 238 -or $c.G -lt 238 -or $c.B -lt 238) {
            $divBottom = $y # first non-white pixel of bottom half
            break
        }
    }

    return @{
        Left = $left
        Right = $right
        Top = $top
        Bottom = $bottom
        DividerTop = $divTop
        DividerBottom = $divBottom
    }
}

$targetW = 1080
$targetH = 420

foreach ($c in $cases) {
    $srcPath = "e:\smileconcepts\public\images\gallery\" + $c.file
    $bmpSrc = [System.Drawing.Bitmap]::FromFile($srcPath)
    $b = Get-ContentBounds $bmpSrc

    $cropW = $b.Right - $b.Left + 1
    $topH = $b.DividerTop - $b.Top + 1
    $botH = $b.Bottom - $b.DividerBottom + 1

    Write-Host "$($c.name): Content Rect Left=$($b.Left), Right=$($b.Right) (W=$cropW)"
    Write-Host "  Top Half (Before): Top=$($b.Top), H=$topH"
    Write-Host "  Bottom Half (After): Top=$($b.DividerBottom), H=$botH"

    # Crop & Scale Top Half (Before)
    $rectBefore = New-Object System.Drawing.Rectangle($b.Left, $b.Top, $cropW, $topH)
    $cropBefore = $bmpSrc.Clone($rectBefore, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $outBefore = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $gBefore = [System.Drawing.Graphics]::FromImage($outBefore)
    $gBefore.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gBefore.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gBefore.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gBefore.DrawImage($cropBefore, 0, 0, $targetW, $targetH)
    $gBefore.Dispose()
    $cropBefore.Dispose()

    $destBefore = "e:\smileconcepts\public\images\gallery\" + $c.name + "-before.jpg"
    $outBefore.Save($destBefore, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $outBefore.Dispose()

    # Crop & Scale Bottom Half (After)
    $rectAfter = New-Object System.Drawing.Rectangle($b.Left, $b.DividerBottom, $cropW, $botH)
    $cropAfter = $bmpSrc.Clone($rectAfter, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $outAfter = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $gAfter = [System.Drawing.Graphics]::FromImage($outAfter)
    $gAfter.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gAfter.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gAfter.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gAfter.DrawImage($cropAfter, 0, 0, $targetW, $targetH)
    $gAfter.Dispose()
    $cropAfter.Dispose()

    $destAfter = "e:\smileconcepts\public\images\gallery\" + $c.name + "-after.jpg"
    $outAfter.Save($destAfter, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $outAfter.Dispose()

    $bmpSrc.Dispose()
    Write-Host "  Successfully regenerated $($c.name) without white borders!"
}
