Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.user_uploaded\media_1791441192513.png")

$cardBounds = @(
    @{ name = "card-1"; x = 10; y = 19; w = 146; h = 148 },
    @{ name = "card-2"; x = 176; y = 19; w = 146; h = 148 },
    @{ name = "card-3"; x = 342; y = 19; w = 146; h = 148 },
    @{ name = "card-4"; x = 508; y = 19; w = 146; h = 148 },
    @{ name = "card-5"; x = 674; y = 19; w = 146; h = 148 },
    @{ name = "card-6"; x = 840; y = 19; w = 146; h = 148 }
)

$outDir = "e:\smileconcepts\public\assets\footer-cases"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir }

foreach ($c in $cardBounds) {
    $rect = New-Object System.Drawing.Rectangle($c.x, $c.y, $c.w, $c.h)
    $cropped = $img.Clone($rect, $img.PixelFormat)
    $cropped.Save("$outDir\$($c.name).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved $($c.name): $($c.w) x $($c.h)"
}

$img.Dispose()
