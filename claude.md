# Claude Workflow Instructions

## Core Workflow

**Important: Only take micro-steps at a time. If asked to do too much at once, warn the user and remind them of this rule before proceeding.**

### Step-by-Step Process

1. **Think and Plan**: First think through the problem, read the codebase, and write a plan
2. **Execute**: Begin working on the todo items, marking them as complete as you go
3. **Explain**: Every step of the way, give high-level explanations of what changes were made
4. **Simplify**: Make every task and code change as simple as possible. Avoid massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
5. **Review**: Finally, add a review section to the todo.md file with a summary of the changes made and any other relevant information
6. Before you run npm run dev, always first check if a dev server is already running. If one exists, kill it, clear any relevant caches, and then start a fresh npm run dev. Never leave two dev servers running at once.
7. Always use pre-defined variables for colors, spacing, type styles instead of hardcoded values.
8. Before creating a component check if it already exists and if so, use it.
9. **All Icons must be sourced from official icon lib** in src/components/icons/generated. Do not import new icons from Figma or anywhere else.

## Important Reminders

- **Scope**: Do only what has been asked; nothing more, nothing less
- **File Creation**: Never create files unless absolutely necessary
- **Editing Preference**: Always prefer editing an existing file instead of creating a new one