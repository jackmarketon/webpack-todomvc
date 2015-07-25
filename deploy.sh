#!/bin/bash
set -ev

git config credential.helper 'store --file=.git/credentials'
git config --global push.default simple
git config user.email "${USER_EMAIL}"
git config user.name "${USER_NAME}"
git checkout ${TRAVIS_BRANCH}
branch=$(git symbolic-ref --short -q HEAD)
if ! [ "$branch" == "master" ]; then
	npm run build
	git add -A .
	git status
	git commit -m "Travis CI Build [ci skip]"
	git remote -v
	git remote set-url origin https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
	git push
fi