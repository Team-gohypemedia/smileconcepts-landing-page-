$url = "https://www.smileconcepts.com.au/"
$html = (Invoke-WebRequest -Uri $url -UseBasicParsing).Content
$matches = [regex]::Matches($html, 'https://www.smileconcepts.com.au/wp-content/uploads/[^"'']+\.(?:jpg|png|jpeg)') | Select-Object -ExpandProperty Value -Unique
foreach ($m in ($matches | Select-Object -Last 40)) {
    Write-Host $m
}
