#!/bin/bash
set -ev

git config credential.helper 'store --file=.git/credentials'
git config --global push.default simple
echo 'https://${GH_TOKEN}:@github.com' > .git/credentials
npm run build
git add -A .
git status
git commit -m 'Travis CI Build [ci skip]'
git remote -v
git remote set-url origin https://github.com/${TRAVIS_REPO_SLUG}.git
git push