## ar.thesystem.at

### installation

#### requirements

* be in a directory you want to work in
* have nodejs > 14.2.0 installed.

```bash
# clone this repository
git clone https://github.com/thesystem-at/ar.thesystem.at

# go to the new project directoy
cd ./ar.thesystem.at

# install @magic dependencies
npm install

# run dev server
npm run dev

# goto http://localhost:2323  in your browser to see the page

# now go change the pages in src/pages, the page will automatically rebuild.

# build changes you made to docs dir to make them permanent
npm run build

# add your changes to git
git add src

# describe your changes in the git log
git commit -m "i just updated something"

# add the docs as a separate commit to keep the history clean
git add docs
git commit -m "update docs dir"

# all done, publish changes
git push

```
