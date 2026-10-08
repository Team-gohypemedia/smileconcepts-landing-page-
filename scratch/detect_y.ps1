Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441203703.png")

# For Card 1, check middle column X = 130
for ($y = 0; $y -lt $img.Height; $y++) {
    $c = $img.GetPixel(130, $y)
    if ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220) {
        Write-Host "Card 1 top white at Y=$y"
        break
    }
}
for ($y = $img.Height - 1; $y -ge 0; $y--) {
    $c = $img.GetPixel(130, $y)
    if ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220) {
        Write-Host "Card 1 bottom white at Y=$y"
        break
    }
}

$img.Dispose()
