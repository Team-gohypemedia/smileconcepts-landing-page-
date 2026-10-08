Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441203703.png")

for ($y = 0; $y -lt 30; $y++) {
    $c = $img.GetPixel(130, $y)
    Write-Host "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()
