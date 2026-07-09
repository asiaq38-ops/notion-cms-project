# Claude Hooks Configuration

This file documents the hooks configured for this project in `.claude/settings.json`.

## Available Hooks

### 1. ✨ Auto-formatting (PostToolUse + Edit|Write)

**What it does:**
Automatically formats TypeScript, JavaScript, and JSON files using Prettier when they are created or modified.

**Trigger:** 
- After editing or creating a file (`.ts`, `.tsx`, `.js`, `.jsx`, `.json`)

**Command:**
```bash
jq -r '.tool_input.file_path' | { read file_path; \
  if [ -f "$file_path" ] && (echo "$file_path" | grep -qE '\.(ts|tsx|js|jsx|json)$'); then \
    npx prettier --write "$file_path" 2>/dev/null || true; \
  fi; \
}
```

**Example:**
```
1. You use /add-component to create UserCard.tsx
2. File is created
3. ✅ Hook automatically runs prettier on UserCard.tsx
4. Code is formatted according to prettier rules
```

**Benefits:**
- 🎯 Consistent code formatting without manual intervention
- 📝 Follows project's prettier configuration
- 🚀 Saves time on code style reviews
- ✅ Prevents formatting conflicts in git diffs

---

### 2. 🔒 File Protection (PreToolUse + Edit|Write)

**What it does:**
Prevents accidental modification of sensitive files that could break the project or expose secrets.

**Protected Files:**
- `.env` - Environment variables (secrets)
- `.env.local` - Local environment overrides
- `package-lock.json` - Dependency lock file
- `yarn.lock` - Yarn lock file

**Trigger:**
- Before attempting to edit any file

**Command:**
```python
python3 << 'PYTHON_EOF'
import json, sys
try:
    data = json.load(sys.stdin)
    file_path = data.get('tool_input', {}).get('file_path', '')
    
    # Protect sensitive files
    protected_files = ['.env', '.env.local', 'package-lock.json', 'yarn.lock']
    for protected in protected_files:
        if protected in file_path:
            print(f'❌ Cannot modify protected file: {file_path}')
            sys.exit(2)
    
    sys.exit(0)
except Exception as e:
    sys.exit(0)
PYTHON_EOF
```

**Example:**
```
1. You request to add a new environment variable to .env
2. Hook detects file path contains '.env'
3. ❌ Edit is blocked with warning message
4. You're prompted to use a safer method (e.g., .env.example)
```

**Benefits:**
- 🛡️ Prevents accidental data loss
- 🔐 Protects sensitive credentials
- 🔄 Maintains dependency lock file integrity
- ⚠️ Forces careful consideration before modifying critical files

---

### 3. 📝 Command Logging (PostToolUse + Bash)

**What it does:**
Logs all bash commands executed by Claude to a log file for audit and debugging purposes.

**Trigger:**
- After executing any bash command

**Log File:**
- Location: `.claude/bash-log.txt`
- Format: `[command] - [description]`

**Command:**
```bash
jq -r '.tool_input | "\(.command) - \(.description // \"No description\")"' >> .claude/bash-log.txt 2>/dev/null || true
```

**Example:**
```
npm run build - Production build
npm run dev - Development server
git push origin main - GitHub에 저장소 푸시
```

**Benefits:**
- 📊 Complete audit trail of executed commands
- 🐛 Helps debug issues by reviewing command history
- 📋 Useful for understanding automation flow
- 🔍 Easy to search and analyze project activity

---

## Hook Management

### Viewing Hooks

To see configured hooks:
```bash
cat .claude/settings.json | jq '.hooks'
```

### Adding New Hooks

1. Edit `.claude/settings.json`
2. Add new hook object to appropriate event (PostToolUse, PreToolUse, etc.)
3. Specify matcher and command
4. Save and restart Claude Code

### Hook Events

- **PreToolUse**: Runs BEFORE a tool is executed (can prevent execution with exit code 2)
- **PostToolUse**: Runs AFTER a tool is executed
- **Stop**: Runs when Claude stops working
- **SubagentStop**: Runs when a subagent stops

### Hook Matchers

- `Edit|Write`: Triggered by file editing or writing
- `Bash`: Triggered by bash command execution
- `*`: Matches any tool
- `Read|Grep|Glob`: Specific read-only tools

---

## Disabling Hooks

To temporarily disable hooks:

### Option 1: Remove from settings.json
Edit `.claude/settings.json` and remove the hook configuration.

### Option 2: Use User Settings
Move hooks to `~/.claude/settings.json` if you want them user-wide, or remove from project settings.

### Option 3: Bypass with Flag
Some tools allow bypassing hooks (check tool documentation).

---

## Best Practices

✅ **Do:**
- Keep hooks lightweight and fast
- Use hooks for automation and safety
- Log important operations
- Protect sensitive files
- Test hooks after adding them

❌ **Don't:**
- Create hooks that take too long to execute
- Use hooks for complex business logic
- Overwrite files without user confirmation
- Create circular hook dependencies
- Disable hooks just to bypass safety checks

---

## Troubleshooting

### Hook Not Running
1. Check `.claude/settings.json` syntax (use `jq` to validate)
2. Verify matcher pattern matches your tool usage
3. Check if hook is in correct event (Pre vs Post)
4. Review Claude Code logs for errors

### Hook Taking Too Long
1. Optimize the shell command
2. Add timeouts if needed
3. Move to background task if possible

### Hook Blocking Legitimate Changes
1. Update the hook's file path matching logic
2. Add exceptions to the protected files list
3. Contact team for review

---

## Related Files

- `.claude/settings.json` - Hook configuration (this project)
- `~/.claude/settings.json` - User-wide settings
- `.claude/bash-log.txt` - Generated bash command log
- `.claude/commands/` - Custom commands
- `.claude/agents/` - Subagents

---

## Examples

### Add a Notification Hook
```json
{
  "PostToolUse": [
    {
      "matcher": "Bash",
      "command": "[ $? -eq 0 ] && echo '✅ Command succeeded' || echo '❌ Command failed'"
    }
  ]
}
```

### Add a TypeScript Check Hook
```json
{
  "PostToolUse": [
    {
      "matcher": "Edit|Write",
      "command": "npx tsc --noEmit 2>&1 | head -5"
    }
  ]
}
```

### Add Commit Message Hook
```json
{
  "PostToolUse": [
    {
      "matcher": "Bash",
      "command": "echo 'Remember: commit message should be descriptive and follow conventions'"
    }
  ]
}
```

---

## Security Considerations

🔐 **Hooks can execute arbitrary commands** - Only add hooks you understand and trust.

⚠️ **Be careful with:**
- System-level commands (rm, sudo, etc.)
- File operations that could delete data
- Commands that access external services
- Loops that could cause infinite execution

✅ **Always:**
- Test hooks before committing
- Add error handling (|| true)
- Document what hooks do
- Review hooks before sharing with team
