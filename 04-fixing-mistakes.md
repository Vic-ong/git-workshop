# Part 4: Fixing Mistakes & Undoing Things (10 mins)

[< Back to Workshop](./README.md) | [< Previous: Branching](./03-branching.md)

---

This is the part everyone needs. Git almost never *actually* deletes anything, so don't panic.

## Oops Tiers

### Tier 1: "I haven't committed yet"

```bash
# Discard changes in a file (revert to last commit)
git checkout -- <file>

# Unstage a file (keep changes, remove from staging)
git reset HEAD <file>

# Nuclear option: discard ALL uncommitted changes
git checkout .
```

### Tier 2: "I committed but haven't pushed"

```bash
# Undo last commit, keep changes staged
git reset --soft HEAD~1

# Undo last commit, keep changes unstaged
git reset HEAD~1

# Undo last commit, discard changes entirely
git reset --hard HEAD~1
```

### Tier 3: "I already pushed"

```bash
# Create a NEW commit that reverses a previous commit (safe for shared branches)
git revert <commit-hash>
```

> **Never `git reset --hard` on a shared branch.** Use `git revert` instead - it's safe because it creates a new commit rather than rewriting history.

### Tier 4: "I need to quickly save my work and switch context"

```bash
# Stash uncommitted changes
git stash

# Get them back
git stash pop
```

## Quick Reference

| Situation | Command |
|---|---|
| Undo uncommitted file changes | `git checkout -- <file>` |
| Unstage a file | `git reset HEAD <file>` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo a pushed commit safely | `git revert <hash>` |
| Temporarily shelve work | `git stash` / `git stash pop` |

---

[Next: Merge Conflicts >](./05-merge-conflicts.md)
