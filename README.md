# Git Workshop (40 mins)

**Audience:** 3 intermediate devs + 1 non-dev beginner

---

## Workshop Outline

| # | Topic | Time | File |
|---|-------|------|------|
| 0 | [Unity .gitignore](./00-unity-gitignore.md) | 2 min | `00-unity-gitignore.md` |
| 1 | [Why Git?](./01-why-git.md) | 5 min | `01-why-git.md` |
| 2 | [Core Workflow Refresher](./02-core-workflow.md) | 5 min | `02-core-workflow.md` |
| 3 | [Branching & Collaboration](./03-branching.md) | 10 min | `03-branching.md` |
| 4 | [Fixing Mistakes & Undoing Things](./04-fixing-mistakes.md) | 10 min | `04-fixing-mistakes.md` |
| 5 | [Merge Conflicts](./05-merge-conflicts.md) | 8 min | `05-merge-conflicts.md` |
| 6 | [Rebasing](./06-rebasing.md) | bonus | `06-rebasing.md` |

---

## Cheat Sheet

```
git status                        # What's going on?
git add <file>                    # Stage a file
git commit -m "message"           # Save a checkpoint
git push                          # Upload to remote
git pull                          # Download from remote
git checkout -b <branch>          # New branch
git checkout <branch>             # Switch branch
git merge <branch>                # Merge branch into current
git log --oneline                 # View history
git stash / git stash pop         # Shelve/unshelve work
git reset --soft HEAD~1           # Undo last commit (keep changes)
git revert <hash>                 # Safely undo a pushed commit
```

---

## Resources

- [Git Visual Guide](https://marklodato.github.io/visual-git-guide/index-en.html) - See what each command actually does
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Fixing common mistakes in plain English
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive visual tutorial
- [GitHub's .gitignore templates](https://github.com/github/gitignore) - For Unity and other frameworks
