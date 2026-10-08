Add-Type -AssemblyName System.Drawing

foreach ($name in @("media_1791441192513.png", "media_1791441200548.png", "media_1791441203703.png")) {
    $img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\$name")
    Write-Host "File $name : $($img.Width) x $($img.Height)"
    # Check bounds of white border
    for ($y = 0; $y -lt $img.Height; $y++) {
        $c = $img.GetPixel(30, $y)
        # sample
    }
    $img.Dispose()
}
