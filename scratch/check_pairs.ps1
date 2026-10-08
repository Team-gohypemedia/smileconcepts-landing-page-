Add-Type -AssemblyName System.Drawing

$pairs = @(
    "all-1", "All-2", "all-3", "all-4", "all-5", "all-6", "all-8", "all-10", "all-15", "all-20"
)

foreach ($p in $pairs) {
    $f1 = "e:\smileconcepts\public\assets\before-after\$p.1.jpg"
    $f2 = "e:\smileconcepts\public\assets\before-after\$p.2.jpg"
    if (Test-Path $f1) {
        $b1 = [System.Drawing.Bitmap]::FromFile($f1)
        $b2 = [System.Drawing.Bitmap]::FromFile($f2)
        Write-Host "$p : ($($b1.Width)x$($b1.Height)) and ($($b2.Width)x$($b2.Height))"
        $b1.Dispose()
        $b2.Dispose()
    }
}
