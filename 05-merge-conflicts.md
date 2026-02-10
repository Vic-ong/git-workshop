# Part 5: Merge Conflicts (8 mins)

[Next: Rebasing >](./06-rebasing.md) | [< Back to Workshop](./README.md) | [< Previous: Fixing Mistakes](./04-fixing-mistakes.md)

---

## Why Do They Happen?

Two people edited the **same line** in the **same file**. Git doesn't know which version to keep, so it asks you.

## Live Demo: Creating a Conflict

```bash
# Setup
git init conflict-demo && cd conflict-demo
echo "Hello World" > greeting.txt
git add . && git commit -m "Initial commit"

# Create two branches that edit the same line
git checkout -b branch-a
echo "Hello from Branch A" > greeting.txt
git add . && git commit -m "Branch A greeting"

git checkout main
git checkout -b branch-b
echo "Hello from Branch B" > greeting.txt
git add . && git commit -m "Branch B greeting"

# Merge branch-a into main
git checkout main
git merge branch-a     # works fine

# Now merge branch-b --> CONFLICT
git merge branch-b     # conflict!
```

## What a Conflict Looks Like

```
<<<<<<< HEAD
Hello from Branch A
=======
Hello from Branch B
>>>>>>> branch-b
```

- `<<<<<<< HEAD` = what's currently in your branch
- `=======` = separator
- `>>>>>>> branch-b` = what's in the incoming branch

## How to Resolve

1. **Open the file** and find the conflict markers
2. **Decide** what the final version should be (pick one side, combine both, or write something new)
3. **Delete the conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`)
4. **Stage and commit**

```bash
# After editing the file to resolve:
git add greeting.txt
git commit -m "Resolve merge conflict in greeting"
```

**Pro tips:**
- Use `git status` to see which files have conflicts
- Your IDE (VS Code, IntelliJ) has built-in conflict resolution tools - use them
- Communicate with your team to avoid editing the same files simultaneously
- Pull often, merge often - smaller merges = fewer conflicts

---

[Next: Unity .gitignore >](./06-unity-gitignore.md)
