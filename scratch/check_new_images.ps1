Add-Type -AssemblyName System.Drawing

$dir = "e:\smileconcepts\public\assets\before-after"
$files = Get-ChildItem -Path $dir -Filter "*.png"

foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    Write-Host "$($f.Name): Width=$($img.Width), Height=$($img.Height)"
    $img.Dispose()
}
