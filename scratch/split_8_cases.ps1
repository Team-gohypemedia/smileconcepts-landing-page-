Add-Type -AssemblyName System.Drawing

$folder = "e:\smileconcepts\public\assets\before-after"

$mapping = @(
    @{ src = "ChatGPT Image Sep 28, 2026, 06_11_37 PM-5.png"; name = "case-makeover-1" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_13_38 PM-3.png"; name = "case-allon4-1" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_13_36 PM-2.png"; name = "case-zirconia-1" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_13_41 PM-4.png"; name = "case-allon4-2" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_11_40 PM-7.png"; name = "case-makeover-2" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_13_35 PM-1.png"; name = "case-fullarch-1" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_11_39 PM-6.png"; name = "case-zirconia-2" },
    @{ src = "ChatGPT Image Sep 28, 2026, 06_11_42 PM-8.png"; name = "case-fullarch-2" }
)

foreach ($item in $mapping) {
    $srcPath = Join-Path $folder $item.src
    if (-not (Test-Path $srcPath)) {
        Write-Error "File not found: $srcPath"
        continue
    }

    $bmp = New-Object System.Drawing.Bitmap($srcPath)
    $w = $bmp.Width
    $h = $bmp.Height
    
    # Left (before): 0 to 990 (width 990)
    $halfW = 990
    $rectBefore = New-Object System.Drawing.Rectangle(0, 0, $halfW, $h)
    $bmpBefore = $bmp.Clone($rectBefore, $bmp.PixelFormat)
    $beforePath = Join-Path $folder ($item.name + "-before.png")
    $bmpBefore.Save($beforePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpBefore.Dispose()

    # Right (after): 993 to 993+990 (width 990)
    $rectAfter = New-Object System.Drawing.Rectangle(993, 0, $halfW, $h)
    $bmpAfter = $bmp.Clone($rectAfter, $bmp.PixelFormat)
    $afterPath = Join-Path $folder ($item.name + "-after.png")
    $bmpAfter.Save($afterPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpAfter.Dispose()

    $bmp.Dispose()
    Write-Host "Processed $($item.name) from $($item.src) -> ($halfW x $h)"
}

Write-Host "All 8 cases successfully split!"
