#Code Guardian
To run all contained in this repo tasks you need ruby and node.js instaled on your system. 

To install all tasks and git hooks just do that:
```
bundle install
npm install -g grunt-cli csslint
npm install // you should have administrative privileges to make symlink on Windows
```
Git hooks contain file encoding, line ending and non-ascii characters checker, commit message pattern validation and scss linting. 

You can extend this with any other scripts if you need it. For example to add another lineter/checker on pre-commit hook just put your file into git-hook folder and add file name to git-hooks/pre-commit. Then run "grunt hooksInstall" to make symlink to .git/hooks folder.