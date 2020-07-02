# dadicated

## Release

On master

```
git switch gh-pages
git reset --hard origin/master
rm -rf dist
npm run build
cp -R ./dist/* .
git add .
git commit -m "Release from master"
git push --force
```
