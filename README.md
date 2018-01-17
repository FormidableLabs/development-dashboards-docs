<h1 align="center">Development Dashboards Documentation Site</h1>

---

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## Getting Started

To install and run the documentation site locally:

```bash
yarn install
yarn run develop
```

Then, open your favorite browser to [localhost:8000](http://localhost:8000/). GraphiQL runs at [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql).

## Ready to Deploy :shipit:

Build the site to test locally.

```bash
yarn run build
```

Serve the build.

```bash
yarn run serve
```

Then, open your favorite browser to [localhost:9000](http://localhost:9000/) to verify everything looks correct.

If everything checks out, build the production site with the prefixed path, `/open-source/development-dashboards/`, so the files load at the correct URL!

```bash
yarn run build:pp
```

To publish to NPM run

```bash
npm version <newversion | major | minor | patch> (see Versioning notes below)
```

### Versioning Notes

For a reliable systems of releases, `development-dashboards-docs` should aim for versioning along these lines:

* _Patch_: Typos, missing assets, broken styles, very minor copyedits.
* _Minor_: Add a new blog post, change styles.
* _Major_: Rearchitect how the lander works, remove pages, or something else huge.
