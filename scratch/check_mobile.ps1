$path = "e:\smileconcepts\public\hero video frame\smileconcepts_webp_frames\smiling_concept_webp_frames\mobile"
$files = Get-ChildItem $path -Filter "*.webp"
Write-Host "Mobile Frame Count: $($files.Count)"
if ($files.Count -gt 0) {
    Write-Host "First: $($files[0].Name)"
    Write-Host "Last: $($files[-1].Name)"
    Add-Type -AssemblyName System.Drawing
    $b = [System.Drawing.Bitmap]::FromFile($files[0].FullName)
    Write-Host "Dimensions: $($b.Width) x $($b.Height)"
    $b.Dispose()
}

$desktopPath = "e:\smileconcepts\public\hero video frame\smileconcepts_webp_frames\smiling_concept_webp_frames"
$desktopFiles = Get-ChildItem $desktopPath -Filter "*.webp"
Write-Host "Desktop Frame Count: $($desktopFiles.Count)"
if ($desktopFiles.Count -gt 0) {
    Write-Host "Desktop First: $($desktopFiles[0].Name)"
    Write-Host "Desktop Last: $($desktopFiles[-1].Name)"
}
