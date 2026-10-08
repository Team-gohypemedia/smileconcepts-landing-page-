$transcriptPath = "C:\Users\anike\.gemini\antigravity-ide\brain\a57f1632-5ef7-43ed-a9ef-7b8adb515301\.system_generated\logs\transcript.jsonl"
$lines = Get-Content $transcriptPath
foreach ($idx in @(211, 229, 831, 974, 988)) {
    $item = $lines[$idx] | ConvertFrom-Json
    Write-Output "=== Index $idx (Step $($item.step_index), Type $($item.type)) ==="
    if ($item.tool_calls) {
        foreach ($tc in $item.tool_calls) {
            Write-Output "Tool: $($tc.name)"
            if ($tc.arguments.CommandLine) { Write-Output "Cmd: $($tc.arguments.CommandLine)" }
            if ($tc.arguments.TargetFile) { Write-Output "File: $($tc.arguments.TargetFile)" }
            if ($tc.arguments.Instruction) { Write-Output "Instruction: $($tc.arguments.Instruction)" }
        }
    }
    if ($item.type -eq "USER_INPUT") {
        Write-Output "User: $($item.content)"
    }
}
