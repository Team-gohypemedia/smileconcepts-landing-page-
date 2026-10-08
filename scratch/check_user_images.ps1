Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem "C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441*.png"
foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    Write-Host "$($f.Name) : $($bmp.Width) x $($bmp.Height)"
    $bmp.Dispose()
}
