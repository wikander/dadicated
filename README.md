# dadicated

## Release

On master

```
git switch gh-pages
git reset --hard origin/master
npm run build
cp -R ./dist/* .
git add .
git commit -m "release..."
git push --force
```
