Add-Type -AssemblyName System.Drawing

$cases = @(
    @{ name = "case-allon4-1"; file = "sc2.jpg"; type = "horizontal" },
    @{ name = "case-allon4-2"; file = "sc3.jpg"; type = "horizontal" },
    @{ name = "case-fullarch-1"; file = "sc4.jpg"; type = "horizontal" },
    @{ name = "case-fullarch-2"; file = "sc5.jpg"; type = "horizontal" },
    @{ name = "case-zirconia-1"; file = "gallery-1.jpg"; type = "horizontal" },
    @{ name = "case-zirconia-2"; file = "gallery-2.jpg"; type = "horizontal" },
    @{ name = "case-smile-1"; file = "before-after-4.jpg"; type = "horizontal" }
)

foreach ($c in $cases) {
    $src = "e:\smileconcepts\public\images\gallery\" + $c.file
    if (Test-Path $src) {
        $bmp = [System.Drawing.Bitmap]::FromFile($src)
        $w = $bmp.Width
        $h = $bmp.Height
        $midY = [int]($h / 2)

        # Top half (Before) - trim 4px to avoid white divider bar
        $rectBefore = New-Object System.Drawing.Rectangle(0, 0, $w, ($midY - 4))
        $bmpBefore = $bmp.Clone($rectBefore, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
        $bmpBefore.Save("e:\smileconcepts\public\images\gallery\" + $c.name + "-before.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmpBefore.Dispose()

        # Bottom half (After) - trim 4px to avoid white divider bar
        $rectAfter = New-Object System.Drawing.Rectangle(0, ($midY + 4), $w, ($h - $midY - 4))
        $bmpAfter = $bmp.Clone($rectAfter, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
        $bmpAfter.Save("e:\smileconcepts\public\images\gallery\" + $c.name + "-after.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmpAfter.Dispose()

        $bmp.Dispose()
        Write-Host "Processed $($c.name): $w x $([int]($h/2))"
    }
}
