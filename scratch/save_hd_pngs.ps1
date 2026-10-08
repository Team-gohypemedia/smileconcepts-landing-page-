Add-Type -AssemblyName System.Drawing

for ($i = 1; $i -le 6; $i++) {
    $src = "e:\smileconcepts\public\assets\footer-cases\source\source-$i.jpg"
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $bmp.Save("e:\smileconcepts\public\assets\footer-cases\card-$i.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Saved card-$i.png in full 1024x1024 resolution"
}
