#### see history
git log --oneline
- show all commits
- Q to quit

#### check all commited changes done
git status
- check all committed and clean

#### push a new branch to remote
git push --set-upstream origin feature/templates

#### bring a branch from remote
git checkout -b feature/graphicItem - to create branch
git pull  - to bring the code

#### To test a merge
```
git checkout master
git pull
git checkout -b temp
git merge master
```