# Git Review

## Scenario 1: Make a change locally, and want that change reflected on Github
* git add (add code to staging area)
* git commit -m "git review folder"
* git push

## Reflect changes from Github locally
* git pull

## New Feature Git Process
* git pull (on main)
* git checkout -b new_feature
* (do some work on that branch)
* git add .
* git commit -m "new feature"
* git checkout main
* git pull
* git checkout new_feature
* git merge main
* (resolve merge conflicts locally)
* git push
