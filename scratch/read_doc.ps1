Add-Type -AssemblyName System.IO.Compression.FileSystem

$filePath = "e:\smileconcepts\public\All on X Content (Manish).docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($filePath)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$rawXml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

# Basic XML parsing to extract paragraphs
[xml]$xml = $rawXml
$nsManager = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsManager.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$paragraphs = $xml.SelectNodes("//w:p", $nsManager)
$output = foreach ($p in $paragraphs) {
    $texts = $p.SelectNodes(".//w:t", $nsManager)
    if ($texts) {
        ($texts | ForEach-Object { $_.InnerText }) -join ""
    } else {
        ""
    }
}

$outputString = $output -join "`r`n"
Set-Content -Path "e:\smileconcepts\scratch\doc_content.txt" -Value $outputString -Encoding UTF8
Write-Output "Successfully extracted $($output.Count) paragraphs."
