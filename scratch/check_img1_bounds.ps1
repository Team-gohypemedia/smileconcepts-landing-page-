Add-Type -AssemblyName System.Drawing

$img1 = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")

# Card 1 is from X=10 to X=155. Let's check vertical bounds of Card 1
for ($y = 0; $y -lt $img1.Height; $y++) {
    $c = $img1.GetPixel(80, $y)
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        Write-Host "Card 1 top white at Y=$y"
        break
    }
}
for ($y = $img1.Height - 1; $y -ge 0; $y--) {
    $c = $img1.GetPixel(80, $y)
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        Write-Host "Card 1 bottom white at Y=$y"
        break
    }
}

$img1.Dispose()
