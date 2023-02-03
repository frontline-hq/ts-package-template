# ts-package-template
A template for building publishable packages in typescript

## Create a repository from this template
0. Replicate this template to your git repo
    - Running `git clone --template=git@github.com:frontline-hq/ts-package-template.git <repo location>` where `<repo location>` is your github repos location will clone your repo and apply this template.
1. Fill in all fields starting with "fill_" in the files in this repo:
    - `name` in `package.json`: The name of the package, as it will appear in the npm registry (E.g. @frontline/recma-sections . @frontline would be the name of your organization or user on npm.). 
    - `version` in `package.json`: The current version of the package, as it will appear in the npm registry (E.g. v1.0.0)
    - `description` in `package.json`: The description of the package, as it will appear in the npm registry
    - `repository` in `package.json`: The git repository, where the package is hosted. (E.g. git@github.com:frontline-hq/recma-sections.git)
    - `author` in `package.json`: The author of this package. (E.g. Benjamin Preiss <benjaminpreiss@protonmail.com>)
    - `license` in `package.json`: The license under which this package is published. (E.g. MIT)
2. Run `npm install` or `yarn install` to install all dependencies in this repo.
3. Start writing your code in `/src/index.ts` (The default export will be the package starting point)
4. Write mocha tests in `/tests/index.spec.ts`

## Publish to npm
No matter where the CI of your future packages will be located, you always have to go through the same steps:
1. `npm run install & npm run test`
2. `npm run ci`
It is advisable to set up automation for this, i.e. with github actions