$fullTranscriptPath = "C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.system_generated\logs\transcript_full.jsonl"
$stream = [System.IO.File]::OpenText($fullTranscriptPath)
$lineNum = 0
while (-not $stream.EndOfStream) {
    $line = $stream.ReadLine()
    if ($lineNum -eq 189) {
        $json = $line | ConvertFrom-Json
        Write-Output "Tool call keys:"
        $tc = $json.tool_calls[0]
        $tc.PSObject.Properties | ForEach-Object { Write-Output "$($_.Name): $($_.Value)" }
        Write-Output "Arguments keys:"
        $tc.arguments.PSObject.Properties | ForEach-Object { Write-Output "$($_.Name): $(if ($_.Value) { $_.Value.GetType().Name } else { 'null' })" }
        if ($tc.arguments.CodeContent) {
            [System.IO.File]::WriteAllText("E:\smileconcepts\scratch\calc_found_189.tsx", $tc.arguments.CodeContent)
            Write-Output "Successfully wrote calc_found_189.tsx! Length: $($tc.arguments.CodeContent.Length)"
        }
        break
    }
    $lineNum++
}
$stream.Close()
