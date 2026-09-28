$dir = "e:\smileconcepts\public\assets\before-after"
Get-ChildItem -Path $dir -Filter "ChatGPT*.png" | ForEach-Object {
    $hash = Get-FileHash $_.FullName
    [PSCustomObject]@{
        Name = $_.Name
        Length = $_.Length
        Hash = $hash.Hash.Substring(0, 16)
    }
}
