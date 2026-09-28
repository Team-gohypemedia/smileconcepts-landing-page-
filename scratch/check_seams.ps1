Add-Type -AssemblyName System.Drawing

$dir = "e:\smileconcepts\public\assets\before-after"
$files = Get-ChildItem -Path $dir -Filter "ChatGPT*.png" | Sort-Object Name

foreach ($f in $files) {
    $bmp = New-Object System.Drawing.Bitmap($f.FullName)
    $w = $bmp.Width
    $h = $bmp.Height
    
    # check pixel colors at (990, 400), (991, 400), (992, 400)
    $c990 = $bmp.GetPixel(990, 400)
    $c991 = $bmp.GetPixel(991, 400)
    $c992 = $bmp.GetPixel(992, 400)
    
    Write-Host "$($f.Name): (990) R=$($c990.R) (991) R=$($c991.R) (992) R=$($c992.R)"
    $bmp.Dispose()
}
