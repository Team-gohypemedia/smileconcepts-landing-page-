Add-Type -AssemblyName System.Drawing

$b = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\assets\footer-cases\card-1.jpg")
Write-Host "Width=$($b.Width), Height=$($b.Height)"
$topWhite = 0
for ($y = 0; $y -lt 100; $y++) {
    $c = $b.GetPixel(512, $y)
    if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) {
        $topWhite++
    } else {
        break
    }
}
Write-Host "Top white border thickness: $topWhite px"
$b.Dispose()
