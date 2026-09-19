Add-Type -AssemblyName System.Drawing

$files = @("sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg", "before-after-4.jpg")

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    $w = $bmp.Width
    $h = $bmp.Height

    # Let's save left half and right half for each
    $halfW = [int]($w / 2)
    $rectL = New-Object System.Drawing.Rectangle(0, 0, $halfW, $h)
    $bL = $bmp.Clone($rectL, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $bL.Save("e:\smileconcepts\public\images\gallery\split-" + [System.IO.Path]::GetFileNameWithoutExtension($f) + "-L.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bL.Dispose()

    $rectR = New-Object System.Drawing.Rectangle($halfW, 0, ($w - $halfW), $h)
    $bR = $bmp.Clone($rectR, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $bR.Save("e:\smileconcepts\public\images\gallery\split-" + [System.IO.Path]::GetFileNameWithoutExtension($f) + "-R.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bR.Dispose()

    # Also save top half and bottom half
    $halfH = [int]($h / 2)
    $rectT = New-Object System.Drawing.Rectangle(0, 0, $w, $halfH)
    $bT = $bmp.Clone($rectT, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $bT.Save("e:\smileconcepts\public\images\gallery\split-" + [System.IO.Path]::GetFileNameWithoutExtension($f) + "-T.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bT.Dispose()

    $rectB = New-Object System.Drawing.Rectangle(0, $halfH, $w, ($h - $halfH))
    $bB = $bmp.Clone($rectB, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $bB.Save("e:\smileconcepts\public\images\gallery\split-" + [System.IO.Path]::GetFileNameWithoutExtension($f) + "-B.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bB.Dispose()

    $bmp.Dispose()
    Write-Host "Done $f"
}
