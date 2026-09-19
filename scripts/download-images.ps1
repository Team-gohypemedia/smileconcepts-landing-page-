# Download Smile Concepts images into organized folders under public/images/
$baseDir = "E:\smileconcepts\public\images"

# Create subfolders
$folders = @("hero", "gallery", "services", "team", "misc")
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path "$baseDir\$folder" -Force | Out-Null
}

# Image list: url, subfolder, filename
$images = @(
    # Hero
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/Home-top-1.jpg", "hero", "home-top-2024.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2020/09/Home-top-1.jpg", "hero", "home-top-2020.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/05/Home-top-1.jpg", "hero", "home-top-2019.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/08/wisdom-teeth-1-scaled-1.jpg", "hero", "wisdom-teeth-hero.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/06/Background-scaled-1.jpg", "hero", "background.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/03/homepage-ba.jpg", "hero", "homepage-ba.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/03/HOME-1.1.jpg", "hero", "home-1.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/03/P2.jpg", "hero", "p2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/05/about-us-sand.jpg", "hero", "about-us-sand.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/orange-smile-concept.jpg", "hero", "orange-smile-concept.jpg")
    # Gallery
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc2.jpg", "gallery", "sc2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc3.jpg", "gallery", "sc3.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc4.jpg", "gallery", "sc4.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sc5.jpg", "gallery", "sc5.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/1.jpg", "gallery", "gallery-1.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/317983198_108023678742771_7002030415253987302_n.jpg", "gallery", "gallery-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/12/kylie-jenner-blonde-hair-smile-with-veneers.jpg", "gallery", "kylie-veneers.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/12/veneers-or-invisalign-for-crooked-teeth.jpg", "gallery", "veneers-vs-invisalign.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/12/porcelain-veneers-painful-or-not.jpg", "gallery", "porcelain-veneers.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2022/12/girl-find-out-veneers-cost.jpg", "gallery", "veneers-cost.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/couple-smiling-at-park.jpg", "gallery", "couple-smiling.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/04/4.jpg", "gallery", "before-after-4.jpg")
    # Services
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/Invisalign-img.jpg", "services", "invisalign.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/ClearBraces-img.jpg", "services", "clear-braces.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/PorcelainVeneers-img.jpg", "services", "porcelain-veneers.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sleep-dentistry-thumbnail.jpg", "services", "sleep-dentistry.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/dental-implants-thumbnail.jpg", "services", "dental-implants.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/gum-lift-thumbnail.jpg", "services", "gum-lift.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/laser-gum-disease-thumbnail.jpg", "services", "laser-gum-disease.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/snoring-thumbnail.jpg", "services", "snoring.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/emergency-dentistry-thumbnail.jpg", "services", "emergency-dentistry.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/laser-root-canal-thumbnail.jpg", "services", "laser-root-canal.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/all-tooth-on-four-thmbnail.jpg", "services", "all-on-four.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/grafting-thumbnail.jpg", "services", "grafting.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/wisdom-teeth-thumbnail.jpg", "services", "wisdom-teeth.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/sleep-apnoea-thumbnail.jpg", "services", "sleep-apnoea.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/tmj-pain-thumbnail.jpg", "services", "tmj-pain.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/What-is-Invisalign-Braces.jpg", "services", "invisalign-braces.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/laser-gum-disease.jpg", "services", "laser-gum-disease-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/gum-lift.jpg", "services", "gum-lift-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/snoring.jpg", "services", "snoring-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/grafting.jpg", "services", "grafting-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/Sleep-Dentistry.jpg", "services", "sleep-dentistry-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/sleep_apnea.jpg", "services", "sleep-apnea.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/all-teeth-on-4.jpg", "services", "all-teeth-on-4.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/TMJ_pain.jpg", "services", "tmj-pain-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/clear_braces.jpg", "services", "clear-braces-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/emergency_dentistry.jpg", "services", "emergency-dentistry-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/dental-implants.jpg", "services", "dental-implants-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/laser_root_canal.jpg", "services", "laser-root-canal-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/wisdom_teeth.jpg", "services", "wisdom-teeth-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/Porcelain-Veneers.jpg", "services", "porcelain-veneers-2.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/implant-sqaure-read-more.jpg", "services", "implant-read-more.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/implant-cost-.jpg", "services", "implant-cost.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/payment-plans-smile-concept.jpg", "services", "payment-plans.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2019/07/orthodontics-braces-top.jpg", "services", "orthodontics-braces.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2026/07/gum-disease-treatment.jpg", "services", "gum-disease-treatment.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2026/07/emergency-dentist.jpg", "services", "emergency-dentist.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2026/06/Gum-Disease-Treatment-in-Sydney.jpg", "services", "gum-disease-sydney.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/laser_sleep.jpg", "services", "laser-sleep.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/cosmetic_problems.jpg", "services", "cosmetic-problems.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/gum_solutions.jpg", "services", "gum-solutions.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/teeth_missing.jpg", "services", "teeth-missing.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/braces-1.jpg", "services", "braces.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/functional_appliances.jpg", "services", "functional-appliances.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/sleep_dentistry.jpg", "services", "sleep-dentistry-3.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/old_fillings.jpg", "services", "old-fillings.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/implant_general.jpg", "services", "implant-general.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/General-Dentistry.jpg", "services", "general-dentistry.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/missing_teeth.jpg", "services", "missing-teeth.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/09/Dental-Veneers-1.jpg", "services", "dental-veneers.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/lingual_braces-1.jpg", "services", "lingual-braces.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/10/aligners.jpg", "services", "aligners.jpg")
    # Team
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/dr_kinnar_shah.jpg", "team", "dr-kinnar-shah.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2024/07/Dr_Manish_Shah.jpg", "team", "dr-manish-shah.jpg")
    # Misc
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2021/02/point-scan-bone.jpg", "misc", "point-scan-bone.jpg")
    ,@("https://www.smileconcepts.com.au/wp-content/uploads/2020/08/pink-drops.jpg", "misc", "pink-drops.jpg")
)

$webClient = New-Object System.Net.WebClient
$webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
$webClient.Headers.Add("Referer", "https://www.smileconcepts.com.au/")

$success = 0
$failed = 0
$failedList = @()

foreach ($img in $images) {
    $url      = $img[0]
    $folder   = $img[1]
    $filename = $img[2]
    $dest     = "$baseDir\$folder\$filename"

    try {
        Write-Host "Downloading $filename ..." -NoNewline
        $webClient.DownloadFile($url, $dest)
        $size = (Get-Item $dest).Length
        if ($size -gt 2000) {
            Write-Host " OK ($([math]::Round($size/1KB, 0)) KB)" -ForegroundColor Green
            $success++
        } else {
            Write-Host " BLOCKED (too small)" -ForegroundColor Red
            Remove-Item $dest -Force
            $failed++
            $failedList += $filename
        }
    } catch {
        Write-Host " ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
        $failedList += $filename
    }
}

$webClient.Dispose()

Write-Host ""
Write-Host "=== Download Complete ===" -ForegroundColor Yellow
Write-Host "Downloaded: $success files" -ForegroundColor Green
Write-Host "Failed:     $failed files" -ForegroundColor Red

if ($failedList.Count -gt 0) {
    Write-Host ""
    Write-Host "Failed files:" -ForegroundColor Red
    $failedList | ForEach-Object { Write-Host "  - $_" }
}

Write-Host ""
Write-Host "Folder summary:" -ForegroundColor Cyan
Get-ChildItem $baseDir -Recurse -File | Group-Object { Split-Path $_.DirectoryName -Leaf } | ForEach-Object {
    Write-Host "  public/images/$($_.Name)/ => $($_.Count) images"
}
