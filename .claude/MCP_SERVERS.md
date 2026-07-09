# MCP Servers Configuration

This file documents the MCP (Model Context Protocol) servers configured for this project in `.mcp.json`.

## What is MCP?

MCP (Model Context Protocol) allows Claude Code to connect to external tools, services, and databases. It extends Claude's capabilities beyond built-in tools by providing access to specialized resources.

## Available MCP Servers

### 1. 📚 Context7 (HTTP Server)

**What it does:**
Provides access to latest documentation, frameworks, libraries, and real-time information.

**Use cases:**
- Search Next.js documentation and API references
- Look up Tailwind CSS properties and examples
- Find shadcn/ui component documentation
- Get latest web development best practices
- Search React/TypeScript documentation

**Type:** HTTP server (cloud-based)

**Example usage:**
```
Search Context7 for: Next.js 15 App Router best practices

Search Context7 for: Tailwind CSS responsive design patterns

Search Context7 for: TypeScript advanced types

Search Context7 for: shadcn/ui Button component customization
```

**Benefits:**
- 🔍 Always up-to-date documentation
- 🌐 Search across multiple frameworks and libraries
- 📖 Find code examples and best practices
- ⚡ No local setup required

---

### 2. 🎭 Playwright (Stdio Server)

**What it does:**
Enables browser automation, testing, and web scraping capabilities.

**Use cases:**
- Automated browser testing
- Taking screenshots of web pages
- Testing responsive design
- E2E testing of your Next.js application
- Web scraping and data extraction
- Visual regression testing

**Type:** Stdio server (requires Node.js)

**Prerequisites:**
```bash
npm install -D @playwright/mcp
# or
npx @playwright/mcp@latest
```

**Example usage:**
```
Use Playwright to: Take a screenshot of https://claude.ai

Use Playwright to: Test if Google homepage loads correctly

Use Playwright to: Fill a form on https://example.com

Use Playwright to: Extract all links from a webpage
```

**Benefits:**
- 🤖 Full browser automation
- 📸 Screenshot and visual testing
- ✅ E2E testing capabilities
- 🔄 Testing across different browsers

---

### 3. 🧠 Sequential Thinking (Stdio Server)

**What it does:**
Helps Claude analyze and solve complex problems step-by-step with detailed reasoning.

**Use cases:**
- Breaking down complex algorithms
- Architecture design and planning
- Debugging complex issues
- Multi-step problem solving
- Code optimization analysis

**Type:** Stdio server (requires Node.js)

**Example usage:**
```
Use Sequential Thinking to: Analyze the best way to optimize this React component

Use Sequential Thinking to: Design the database schema for a blog application

Use Sequential Thinking to: Debug this complex TypeScript type issue

Use Sequential Thinking to: Plan a migration from class components to functional components
```

**Benefits:**
- 🤔 Detailed step-by-step reasoning
- 📊 Complex problem analysis
- 🏗️ Architecture planning
- 🔧 Systematic debugging

---

## Configuration File

The `.mcp.json` file in the project root defines all available MCP servers:

```json
{
  "mcpServers": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp"
    },
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {}
    },
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

---

## How to Use MCP Servers in Claude Code

### Method 1: Direct Commands

Use the server name as a prefix:

```
@context7: Search for Next.js 15 routing best practices

@playwright: Take a screenshot of the home page

@sequential-thinking: Analyze this algorithm complexity
```

### Method 2: Natural Language

Claude will automatically use appropriate MCP servers when needed:

```
Take a screenshot of the current app and compare with design

Find the latest Tailwind CSS documentation for flexbox

Debug this complex state management issue step by step
```

### Method 3: In Chat

Ask Claude to use MCP servers for specific tasks:

```
Can you use Playwright to test if all links on the page work?

Search Context7 for React Server Components documentation

Use Sequential Thinking to design the data flow for this feature
```

---

## Common MCP Tasks

### 📚 Documentation Searches (Context7)

```
Search Context7 for: Next.js 15 new features

Search Context7 for: Tailwind CSS utility functions

Search Context7 for: React 19 breaking changes

Search Context7 for: TypeScript 5.0 improvements
```

### 🎭 Browser Testing (Playwright)

```
Use Playwright to: Open https://example.com and wait for page load

Use Playwright to: Fill form with test data and submit

Use Playwright to: Test mobile responsiveness

Use Playwright to: Compare screenshots before/after changes
```

### 🧠 Problem Solving (Sequential Thinking)

```
Use Sequential Thinking to: Break down this complex feature into steps

Use Sequential Thinking to: Analyze performance bottlenecks

Use Sequential Thinking to: Plan component refactoring
```

---

## Adding New MCP Servers

To add a new MCP server to your project:

1. Edit `.mcp.json`
2. Add new server configuration:

```json
{
  "mcpServers": {
    "new-server": {
      "type": "http",
      "url": "https://server-url/mcp"
    }
  }
}
```

Or for stdio servers:

```json
{
  "new-server": {
    "type": "stdio",
    "command": "npx",
    "args": ["@package/mcp@latest"]
  }
}
```

3. Test the connection in Claude Code with `/mcp`
4. Commit and push changes

---

## MCP Server Types

### HTTP Servers
- **Pros**: No local installation, cloud-based
- **Cons**: Requires internet connection
- **Example**: Context7

### Stdio Servers
- **Pros**: More powerful, local control
- **Cons**: Requires Node.js and dependencies
- **Example**: Playwright, Sequential Thinking

---

## Checking MCP Server Status

In Claude Code, check connected servers:

```
/mcp
```

This displays:
- ✅ Connected servers
- ❌ Failed connections
- 📊 Server capabilities

---

## Troubleshooting

### Server Not Connecting

**HTTP Servers (Context7):**
- Check internet connection
- Verify URL is correct
- Check for firewall issues

**Stdio Servers (Playwright, Sequential Thinking):**
- Ensure Node.js is installed
- Run: `npm install`
- Verify command is correct
- Check node_modules has required packages

### Performance Issues

- HTTP servers should be fast (cloud-based)
- Stdio servers may take time to start
- First use might download dependencies

### Missing Features

Some MCP servers require:
- Authentication (API keys)
- Specific Node.js versions
- Additional dependencies

Check server documentation for requirements.

---

## Best Practices

✅ **Do:**
- Use Context7 for documentation searches
- Use Playwright for testing and automation
- Use Sequential Thinking for complex analysis
- Commit `.mcp.json` to share settings with team
- Test MCP servers after adding them

❌ **Don't:**
- Add servers you don't need (can slow down startup)
- Expose sensitive URLs in `.mcp.json`
- Use stdio servers without Node.js installed
- Commit secrets or API keys in config

---

## Related Resources

- **MCP Documentation**: https://modelcontextprotocol.io
- **Claude Code Guide**: https://claude.com/claude-code
- **Context7**: https://context7.com
- **Playwright**: https://playwright.dev
- **Project README**: See main README.md for all features

---

## Examples

### Example 1: Documentation Search

```
User: How do I use App Router in Next.js 15?

Claude: Let me search the latest documentation for you.
(uses Context7 MCP)

Result: App Router allows file-based routing...
```

### Example 2: Testing

```
User: Take a screenshot of the home page

Claude: I'll use Playwright to open and screenshot your site.
(uses Playwright MCP)

Result: [Screenshot saved]
```

### Example 3: Architecture Planning

```
User: How should I structure the API routes?

Claude: Let me think through this step by step.
(uses Sequential Thinking MCP)

Result: Step 1: Identify endpoints...
        Step 2: Plan folder structure...
        Step 3: Design middleware...
```
