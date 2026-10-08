$urls = @(
    @{ name = "source-1"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/1-1024x1024.jpg" },
    @{ name = "source-2"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc2-1024x1024.jpg" },
    @{ name = "source-3"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc3-1024x1024.jpg" },
    @{ name = "source-4"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc4-1024x1024.jpg" },
    @{ name = "source-5"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc5-1024x1024.jpg" },
    @{ name = "source-6"; url = "https://www.smileconcepts.com.au/wp-content/uploads/2024/07/317983198_108023678742771_7002030415253987302_n-1024x1024.jpg" }
)

$destDir = "e:\smileconcepts\public\assets\footer-cases\source"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir }

foreach ($item in $urls) {
    $out = "$destDir\$($item.name).jpg"
    Invoke-WebRequest -Uri $item.url -OutFile $out -UseBasicParsing
    Write-Host "Downloaded $($item.name).jpg"
}
