# Code Guardian
Deveolped by Dmytro Nechepurenko. Distributed by MIT license.

## About
Code guardian is example of gulp-based set for code review process.
Old grunt-based version you can check [here](https://github.com/dimanech/code-guardian/tree/grunt)

## Installation
Requaired: nodejs, npm, ruby, gem

	gem install scss-lint css-lint
	npm install gulp gulp-util gulp-csslint gulp-scss-lint

	cp ./pre-commit ./.git/hooks/

## Start manually
	gulp code-guardian # check css and scss files
	gulp # pre commit check emulation