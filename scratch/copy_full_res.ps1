for ($i = 1; $i -le 6; $i++) {
    $src = "e:\smileconcepts\public\assets\footer-cases\source\source-$i.jpg"
    $dst = "e:\smileconcepts\public\assets\footer-cases\card-$i.jpg"
    Copy-Item $src $dst -Force
    $size = (Get-Item $dst).Length
    Write-Host "Copied card-$i.jpg ($size bytes)"
}
