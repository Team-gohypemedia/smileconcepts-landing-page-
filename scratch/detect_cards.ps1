Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")
Write-Host "Width: $($img.Width), Height: $($img.Height)"

# Sample horizontal profile to find card boxes with white borders
# Scan across middle Y
$midY = [int]($img.Height / 2)
$whiteCols = @()
for ($x = 0; $x -lt $img.Width; $x++) {
    $c = $img.GetPixel($x, $midY)
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        $whiteCols += $x
    }
}
Write-Host "White pixel columns at Y=$midY : $($whiteCols -join ', ')"
$img.Dispose()
