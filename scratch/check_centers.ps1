Add-Type -AssemblyName System.Drawing

$origs = @("before-after-4.jpg", "sc2.jpg", "sc3.jpg", "sc4.jpg", "sc5.jpg", "gallery-1.jpg", "gallery-2.jpg")

foreach ($f in $origs) {
    $bmp = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\images\gallery\" + $f)
    Write-Host "============================"
    Write-Host "IMAGE: $f ($($bmp.Width) x $($bmp.Height))"
    
    # Check if there is text in the image
    # Let's check the center divider line
    # Is it horizontal (at height/2) or vertical (at width/2)?
    $hMid = [int]($bmp.Height / 2)
    $wMid = [int]($bmp.Width / 2)
    
    # Check color at center point
    $centerPixel = $bmp.GetPixel($wMid, $hMid)
    Write-Host "Center point color: $centerPixel"
    $bmp.Dispose()
}
