<h1 align="center">Development Dashboards Documentation Site</h1>

---

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## Getting Started

To install and run the documentation site locally:

```sh
$ yarn install
$ yarn run develop
```

Then, open your favorite browser to [localhost:8000](http://localhost:8000/). GraphiQL runs at [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql).

## Ready to Deploy :shipit:

Build the site to test locally.

```sh
$ yarn run build
```

Serve the build.

```sh
$ yarn run serve
```

Then, open your favorite browser to [localhost:9000](http://localhost:9000/) to verify everything looks correct.

### Publishing

When publishing, please make sure to install and use `npm@5.6.0` to preserve
file timestamp metadata as it is required for our overall website build and
versions subsequent to `5.6.0` intentionally destroy this metadata:

```sh
$ npm install -g npm@5.6.0
$ npm --version
5.6.0
```

To publish to NPM first create version commits.

```sh
$ npm version <newversion | major | minor | patch> (see Versioning notes below)
```

For a reliable systems of releases, `development-dashboards-docs` should aim for versioning along these lines:

* _Patch_: Typos, missing assets, broken styles, very minor copyedits.
* _Minor_: Add a new blog post, change styles.
* _Major_: Rearchitect how the lander works, remove pages, or something else huge.

Then actually publish

```sh
$ npm publish
```

And push changes back to GitHub:

```sh
$ git push && git push --tags
```
