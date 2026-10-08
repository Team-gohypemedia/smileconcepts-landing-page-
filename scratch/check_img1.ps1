Add-Type -AssemblyName System.Drawing

$img1 = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")
Write-Host "img1 size: $($img1.Width) x $($img1.Height)"
for ($y = 0; $y -lt 30; $y++) {
    $c = $img1.GetPixel(80, $y)
    if ($c.R -gt 200 -and $c.G -gt 200 -and $c.B -gt 200) {
        Write-Host "img1 Y=$y is white border"
    }
}
$img1.Dispose()
