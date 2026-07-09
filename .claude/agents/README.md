# Claude Subagents

This directory contains specialized subagents for the Claude Next.js Starter Kit. Each subagent is an expert in a specific domain and operates independently.

## Available Subagents

### 🎨 component-generator
**React component generation and optimization specialist**

Creates high-quality React components with:
- TypeScript support
- Tailwind CSS styling
- JSDoc documentation
- Accessibility (a11y) compliance
- shadcn/ui component suggestions

**When to use:**
- Creating new UI components
- Refactoring existing components
- Optimizing component code quality

**Example:**
```
@component-generator: Build a BlogCard component showing post title, excerpt, author, and read time
```

---

### 📄 page-builder
**Next.js page and routing specialist**

Generates complete Next.js pages with:
- App Router structure
- Layout management
- SEO metadata
- Dynamic routing support
- Responsive layouts

**When to use:**
- Adding new pages to your app
- Setting up complex routing structures
- Creating nested layouts
- Managing page metadata

**Example:**
```
@page-builder: Create a docs section with docs/layout.tsx (sidebar) and docs/getting-started page
```

---

## How to Use Subagents

### In Claude Code (Interactive)

Use the `@agent-name` syntax when chatting:

```
Me: @component-generator: Make a PricingCard with features list and CTA button

Claude (via component-generator): Here's your PricingCard component...
```

### Key Features

- **Independent Context**: Each subagent maintains its own context
- **Specialized Tools**: Access to read, write, and file manipulation tools
- **Domain Expertise**: Deep knowledge of their specific domain
- **Quality Output**: Optimized code following project conventions

---

## Architecture

```
.claude/agents/
├── README.md                # This file
├── component-generator.md   # Component creation expert
└── page-builder.md          # Page/routing expert
```

Each agent file contains:
- Agent metadata (name, description, model, tools)
- Detailed role and responsibilities
- Usage examples
- Output templates
- Project structure guidelines
- Quality standards

---

## Adding New Subagents

To add a new subagent:

1. Create a new `.md` file in this directory
2. Start with the frontmatter:
   ```markdown
   ---
   name: agent-name
   description: Brief description
   model: claude-opus-4-8
   tools: Read, Write, Edit, Grep, Bash
   ---
   ```
3. Add detailed instructions and examples
4. Commit and push to GitHub

### Suggested Future Subagents

- **test-runner**: Automated testing and test generation
- **security-checker**: Security vulnerability scanning
- **performance-analyzer**: Performance optimization suggestions
- **doc-writer**: Documentation generation
- **refactorer**: Code refactoring specialist

---

## Tips

✅ **Do:**
- Use subagents for specialized, focused tasks
- Let subagents leverage their domain expertise
- Combine multiple subagents for complex workflows

❌ **Don't:**
- Use subagents for general chat (use main Claude)
- Expect subagents to handle tasks outside their domain
- Bypass subagents when they're better suited for the task

---

## Resources

- [Claude Code Documentation](https://claude.com/claude-code)
- [Agent SDK Guide](https://github.com/anthropics/claude-code)
- Project README for commands and features overview
