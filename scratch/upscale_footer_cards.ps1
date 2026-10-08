Add-Type -AssemblyName System.Drawing

$outDir = "e:\smileconcepts\public\assets\footer-cases"

for ($i = 1; $i -le 6; $i++) {
    $srcPath = "$outDir\card-$i.png"
    $srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)
    
    # 3x supersample for retina crispness
    $newW = $srcBmp.Width * 3
    $newH = $srcBmp.Height * 3
    
    $dstBmp = New-Object System.Drawing.Bitmap($newW, $newH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dstBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $rect = New-Object System.Drawing.Rectangle(0, 0, $newW, $newH)
    $g.DrawImage($srcBmp, $rect)
    
    $g.Dispose()
    $srcBmp.Dispose()
    
    # Overwrite with high-res crisp version
    $dstBmp.Save("$outDir\card-$i.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $dstBmp.Dispose()
    Write-Host "Supersampled card-$i to $newW x $newH"
}
