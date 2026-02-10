# Part 3: Branching & Collaboration (10 mins)

[< Back to Workshop](./README.md) | [< Previous: Core Workflow](./02-core-workflow.md)

---

## Why Branch?

The `main` branch is your **stable, working version**. You never want to break it. Branches let you work on features in isolation.

```
main:       A --- B --- C
                   \
feature:            D --- E
```

## Branch Commands

```bash
# Create and switch to a new branch
git checkout -b feature/player-movement

# See all branches (* = current)
git branch

# Switch between branches
git checkout main

# Push a new branch to remote
git push -u origin feature/player-movement
```

## Team Workflow (Feature Branch Model)

```
1. Pull latest main        -->  git pull origin main
2. Create your branch      -->  git checkout -b feature/my-task
3. Do your work, commit    -->  git add . && git commit -m "..."
4. Push your branch        -->  git push -u origin feature/my-task
5. Open a Pull Request     -->  (on GitHub/GitLab)
6. Team reviews & merges   -->  merge into main
7. Everyone pulls main     -->  git pull origin main
```

**Rule of thumb:** One branch per feature/task. Keep branches short-lived.

---

[Next: Fixing Mistakes & Undoing Things >](./04-fixing-mistakes.md)
