# GIT 

## Objectives: 
* Explore the basics of an IDE (VSCode)
* Create a GitHub repository.
* Navigate GitHub to locate repositories.
* Create an SSH key.
* Perform the steps necessary to link our SSH key with our GitHub account.


<a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank">Git Cheatsheet</a>

[Common Git Commands Walkthrough](./common_git_commands.md)

<a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank">Github - Generate new SSH key</a>

## Helpful Git terminal commands 
### Branches
* ```git checkout -b new_branch```
    - creates a new branch called new_branch
* ```git branch -D new_branch```
    - deletes a branch that has a name of new_branch
* ```git checkout branch_name```
    - checks out a branch called branch_name where all local changes will apply to this branch
* ```git push origin new_branch```
    - adds a new branch called new_branch to the remote origin 
    - aka will now have the new_branch in Github as well as locally

### Remotes
* ```git remote add origin https://some/origin/url```
    - adds a new remote origin url
    - any changes pushed up will go to this url
* ```git remote rm destination```
    - removes references to the remote called destination
* ```git remote -v```
    - prints out the url that the remote is tied to
