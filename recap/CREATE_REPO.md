# Create new GitHub repo (one command)

From **repo root** (`/Users/jaypatel/Desktop/Projects/recap`), after logging in with `gh auth login`:

```bash
cd /Users/jaypatel/Desktop/Projects/recap && git remote remove origin 2>/dev/null; gh repo create recap --public --source=. --remote=origin --push
```

Done. New repo is created and your branch is pushed.
