#!/bin/bash
set -ev

npm run build
git config credential.helper 'store --file=.git/credentials'
git config --global push.default simple
echo 'https://${GH_TOKEN}:@github.com' > .git/credentials
git add -A .
git commit -m 'Travis CI Build'
git remote -v
git remote set-url origin https://github.com/${TRAVIS_REPO_SLUG}.git
git push