Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441203703.png")
Write-Host "Image size: $($img.Width) x $($img.Height)"

# Find all bounding boxes of white frames
# Let's inspect rows and columns with white borders
# Scan across middle Y
$midY = [int]($img.Height / 2)
Write-Host "Scanning at Y=$midY"

# Let's find contiguous white segments on row midY
$whiteCols = @()
for ($x = 0; $x -lt $img.Width; $x++) {
    $c = $img.GetPixel($x, $midY)
    if ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220) {
        $whiteCols += $x
    }
}
Write-Host "White columns at midY: $($whiteCols -join ', ')"

# Also let's inspect column 60 to find top and bottom Y of card 1
$whiteRows = @()
for ($y = 0; $y -lt $img.Height; $y++) {
    $c = $img.GetPixel($whiteCols[0], $y)
    if ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220) {
        $whiteRows += $y
    }
}
Write-Host "White rows at X=$($whiteCols[0]): $($whiteRows[0]) to $($whiteRows[-1])"

$img.Dispose()
