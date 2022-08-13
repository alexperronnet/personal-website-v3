#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'Deploy'
git push -f git@github.com:alexperronnet/personal-website-v3.git main:production

cd -