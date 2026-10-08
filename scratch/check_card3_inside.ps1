Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")

# Card 3 is CHIPPED TEETH.
# In detect_cards earlier: Card 3 white columns were 341-342 on left, 486-488 on right.
# Top white is Y=19, bottom white is Y=166.
Write-Host "Card 3 (342, 19): $($img.GetPixel(342, 19))"
Write-Host "Card 3 inside top-left (344, 21): $($img.GetPixel(344, 21))"
Write-Host "Card 3 inside center (414, 92): $($img.GetPixel(414, 92))"

$img.Dispose()
