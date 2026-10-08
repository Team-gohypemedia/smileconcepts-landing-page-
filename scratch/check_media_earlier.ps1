Add-Type -AssemblyName System.Drawing

$f = "C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791437606697.png"
if (Test-Path $f) {
    $b = [System.Drawing.Bitmap]::FromFile($f)
    Write-Host "media_1791437606697: $($b.Width) x $($b.Height)"
    $b.Dispose()
}
