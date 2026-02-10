# Part 6: Rebasing (bonus)

[< Back to Workshop](./README.md) | [< Previous: Merge Conflicts](./05-merge-conflicts.md)

---

## Merge vs Rebase

Both integrate changes from one branch into another, but they do it differently.

### Merge: Preserves History As-Is

```
main:       A --- B --- C --- M  (merge commit)
                   \         /
feature:            D --- E
```

- Creates a **merge commit** (M) that ties the branches together
- History shows exactly what happened, including parallel work
- Can get messy with many branches

### Rebase: Replays Your Commits on Top

```
Before rebase:
main:       A --- B --- C
                   \
feature:            D --- E

After rebase:
main:       A --- B --- C
                         \
feature:                  D' --- E'
```

- **Moves** your branch's commits to the tip of main
- Produces a clean, linear history - as if you started your work *after* C
- D and E become D' and E' (new commits with the same changes but different hashes)

## How to Rebase

```bash
# On your feature branch, rebase onto main
git checkout feature/my-task
git rebase main

# If there are conflicts, resolve them, then:
git add <resolved-file>
git rebase --continue

# If things go wrong, abort and go back to before the rebase
git rebase --abort
```

## When to Use Which

| Use **merge** when... | Use **rebase** when... |
|---|---|
| Working on shared/public branches | Cleaning up local commits before a PR |
| You want to preserve the full history | You want a linear, readable history |
| You're not comfortable rewriting history | You're working on a personal feature branch |

## The Golden Rule

> **Never rebase commits that have been pushed and shared with others.**

Rebasing rewrites commit history. If someone else has based work on those commits, their history will diverge from yours and things will get messy.

```bash
# Safe: rebase your local feature branch onto latest main
git checkout feature/my-task
git rebase main

# Dangerous: rebasing a branch others are also working on
git checkout shared-branch
git rebase main          # don't do this
```

## Common Workflow: Rebase Before Merging

Many teams use this pattern to keep a clean `main` history:

```bash
# 1. Finish your work on a feature branch
git checkout feature/my-task

# 2. Get latest main
git fetch origin

# 3. Rebase your branch onto latest main
git rebase origin/main

# 4. Force push your rebased branch (only your branch!)
git push --force-with-lease

# 5. Open a Pull Request / merge into main
```

`--force-with-lease` is safer than `--force` - it will refuse to push if someone else has pushed to the branch since you last fetched.

---

[< Back to Workshop](./README.md)
