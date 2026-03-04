# 📋 Detailed Instructions

> **Before reading this**, try completing the [challenge](README.md#-the-challenge) on your own first! Making mistakes and figuring things out is one of the best ways to learn. But if you get stuck, this guide has you covered.

---

## Step 1: Fork the Repository

A **fork** is your own copy of someone else's repository on GitHub.

1. Go to the original repository page on GitHub
2. Click the **Fork** button in the top-right corner of the page
3. GitHub will create a copy of the repository under your account

After forking, you'll be on a page that looks like the original repo, but the URL will now say `github.com/YOUR-USERNAME/git-workshop`.

---

## Step 2: Clone Your Fork

**Cloning** means downloading the repository from GitHub to your computer so you can work on it.

1. On your forked repository page, click the green **Code** button
2. Copy the URL (make sure **HTTPS** is selected)
3. Open your terminal (or Git Bash on Windows) and run:

```
git clone https://github.com/YOUR-USERNAME/git-workshop.git
```

> Replace `YOUR-USERNAME` with your actual GitHub username.

4. Move into the project folder:

```
cd git-workshop
```

---

## Step 3: Create a New Branch

A **branch** lets you make changes without affecting the main version of the project. This keeps things organized.

Run this command to create a new branch and switch to it:

```
git checkout -b add-your-name
```

> You can name the branch anything you want, but `add-your-name` is a good descriptive name for what you're doing.

You should see a message like: `Switched to a new branch 'add-your-name'`

---

## Step 4: Add Your Name to `names.txt`

1. Open the `names.txt` file in any text editor (VS Code, Notepad, or whatever you prefer)
2. Add your name on a **new line** at the end of the file
3. Save the file

For example, if the file looks like this:

```
Fawaz Abdullah
```

After adding your name, it should look like this:

```
Fawaz Abdullah
Your Name
```

---

## Step 5: Commit Your Changes

Now you need to save your changes in Git. This is a two-step process:

**First**, stage your changes (tell Git which files to include):

```
git add names.txt
```

**Then**, commit the changes (save them with a message describing what you did):

```
git commit -m "Add my name to names.txt"
```

> The message inside the quotes should briefly describe what you changed. Keep it short and clear.

### Common mistake

If you see an error like `nothing to commit`, make sure you saved the `names.txt` file after editing it.

---

## Step 6: Push Your Changes

**Pushing** uploads your changes from your computer to your fork on GitHub.

```
git push origin add-your-name
```

> `origin` refers to your fork on GitHub, and `add-your-name` is the branch you created. If you named your branch something different, use that name instead.

### Common mistake

If you get an error about authentication, you may need to set up a Personal Access Token or SSH key. Check [GitHub's guide on authentication](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

---

## Step 7: Open a Pull Request

A **pull request** (PR) is how you ask the original repository owner to accept your changes.

1. Go to **your fork** on GitHub (github.com/YOUR-USERNAME/git-workshop)
2. You should see a yellow banner saying your branch was recently pushed, with a **Compare & pull request** button — click it!
3. If you don't see the banner, click the **Contribute** button, then **Open pull request**
4. Give your pull request a clear title (e.g., "Add my name to names.txt")
5. Click **Create pull request**

That's it! Now wait for the repository owner to review and merge your pull request. 🎉

---

## Step 8: See Your Name on the Board!

Once your pull request is merged, visit the [Workshop Board](https://fawazabdullah25.github.io/git-workshop/) to see your name displayed alongside everyone else who completed the challenge.

---

## Quick Reference

Here are all the commands in order:

```
git clone https://github.com/YOUR-USERNAME/git-workshop.git
cd git-workshop
git checkout -b add-your-name
# Edit names.txt and add your name
git add names.txt
git commit -m "Add my name to names.txt"
git push origin add-your-name
# Then open a pull request on GitHub
```

---

You did it! Welcome to the world of Git & GitHub. 🚀
