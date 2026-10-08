Add-Type -AssemblyName System.Drawing

$img3 = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441203703.png")

# Card 3 in img3: columns 375 to 515.
# Let's inspect Y bounds of Card 3 in img3:
for ($y = 0; $y -lt $img3.Height; $y++) {
    $c = $img3.GetPixel(440, $y)
    # find top border
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        Write-Host "img3 card 3 white at Y=$y"
    }
}
$img3.Dispose()
