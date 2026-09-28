Add-Type -AssemblyName System.Drawing

$file = "e:\smileconcepts\public\assets\before-after\ChatGPT Image Sep 28, 2026, 06_13_35 PM-1.png"
$bmp = New-Object System.Drawing.Bitmap($file)
$midX = [int]($bmp.Width / 2)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height), MidX: $midX"

# Sample pixels around midX at several Y levels
for ($x = ($midX - 10); $x -le ($midX + 10); $x++) {
    $c = $bmp.GetPixel($x, [int]($bmp.Height / 2))
    Write-Host ("X={0}: R={1}, G={2}, B={3}" -f $x, $c.R, $c.G, $c.B)
}

$bmp.Dispose()
