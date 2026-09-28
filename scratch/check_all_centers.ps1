Add-Type -AssemblyName System.Drawing

$dir = "e:\smileconcepts\public\assets\before-after"
$files = Get-ChildItem -Path $dir -Filter "ChatGPT*.png"

foreach ($f in $files) {
    $bmp = New-Object System.Drawing.Bitmap($f.FullName)
    $w = $bmp.Width
    $h = $bmp.Height
    $midX = [int]($w / 2) # 991
    
    # Check difference between adjacent column pixels at several heights
    # Specifically check if there's a hard boundary or sharp seam at x=991, 992
    Write-Host "File: $($f.Name), W=$w, H=$h, midX=$midX"
    $bmp.Dispose()
}
