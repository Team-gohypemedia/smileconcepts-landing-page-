Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")

# Scan column X = 80 (inside card 1) vertically to find top and bottom white border
$whiteRows = @()
for ($y = 0; $y -lt $img.Height; $y++) {
    $c = $img.GetPixel(10, $y) # on the left border
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        $whiteRows += $y
    }
}
Write-Host "White pixel rows on border: $($whiteRows -join ', ')"

# Also scan media_1791441200548.png and media_1791441203703.png
$f2 = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441200548.png")
Write-Host "File 2: $($f2.Width) x $($f2.Height)"
$f3 = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441203703.png")
Write-Host "File 3: $($f3.Width) x $($f3.Height)"

$img.Dispose()
$f2.Dispose()
$f3.Dispose()
