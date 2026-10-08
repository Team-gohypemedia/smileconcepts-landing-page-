Add-Type -AssemblyName System.Drawing

for ($i = 1; $i -le 6; $i++) {
    $b = [System.Drawing.Bitmap]::FromFile("e:\smileconcepts\public\assets\footer-cases\card-$i.jpg")
    $leftWhite = 0
    for ($x = 0; $x -lt 50; $x++) {
        $c = $b.GetPixel($x, 512)
        if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) { $leftWhite++ } else { break }
    }
    $rightWhite = 0
    for ($x = 1023; $x -ge (1024-50); $x--) {
        $c = $b.GetPixel($x, 512)
        if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) { $rightWhite++ } else { break }
    }
    Write-Host "card-$i.jpg: Left white = $leftWhite px, Right white = $rightWhite px"
    $b.Dispose()
}
