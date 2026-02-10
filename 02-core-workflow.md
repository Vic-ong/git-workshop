# Part 2: Core Workflow Refresher (5 mins)

[< Back to Workshop](./README.md) | [< Previous: Why Git?](./01-why-git.md)

---

```
Working Directory  -->  Staging Area  -->  Repository
   (your files)        (git add)          (git commit)
```

## The Essential Commands

```bash
# Check what's changed
git status

# Stage specific files for commit
git add <file>

# Commit with a message (the "why", not the "what")
git commit -m "Add player health bar to HUD"

# Push your commits to remote (GitHub/GitLab)
git push

# Pull latest changes from remote
git pull
```

**Tip:** Write commit messages that explain *why*, not *what*. Your diff already shows what changed.

```
Bad:  "Updated file"
Bad:  "Changed line 42"
Good: "Fix health bar not updating after taking damage"
```

---

[Next: Branching & Collaboration >](./03-branching.md)
