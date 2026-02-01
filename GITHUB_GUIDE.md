# How to Upload Your UCL Project to GitHub

Follow these steps to save your project and share it on GitHub.

### 1. Install Git
If you don't have Git installed, download it from [git-scm.com](https://git-scm.com/).

### 2. Create a Repository on GitHub
1. Go to [github.com](https://github.com/) and log in.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it (e.g., `ucl-champions-league-project`).
4. Keep it Public or Private as you prefer.
5. **DO NOT** initialize with a README, license, or gitignore (I have already created a `.gitignore` for you).
6. Click **Create repository**.

### 3. Initialize Git and Push Your Code
Open your terminal (PowerShell or Command Prompt) in the project folder (`c:\Users\AG\OneDrive\Desktop\ucl project`) and run these commands:

```powershell
# 1. Initialize the local directory as a Git repository
git init

# 2. Add all files to be tracked (the .gitignore will automatically skip large/private files)
git add .

# 3. Commit the changes
git commit -m "Initial commit: UCL Project with Backend and Fantasy Football"

# 4. Rename the main branch
git branch -M main

# 5. Add your GitHub repository as a remote (REPLACE the URL with your actual repo link)
git remote add origin https://github.com/YOUR_USERNAME/ucl-champions-league-project.git

# 6. Push the code to GitHub
git push -u origin main
```

### Important Note on the Database
I have configured the `.gitignore` to **exclude** the database file (`ucl_project.db`). 
- **On GitHub**: People will see your code, but not the actual data inside the DB.
- **When someone downloads it**: They will need to run `dotnet ef database update` to recreate the database locally.

### Keeping it Updated
Whenever you make more changes, just run:
```powershell
git add .
git commit -m "Descriptive message about what you changed"
git push
```
