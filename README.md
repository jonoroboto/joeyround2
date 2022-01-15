# Roboto Studio Turborepo/Sanity/Next starter

Following the announcement of Vercel accquiring TurboRepo, we wanted to pull together all our favourite packages to create a "best in class" framework for building a website

## Getting started

1. Clone repo
   ```
   git clone https://github.com/robotostudio/turbo-sanity-next
   ```
1. Install dependencies
   ```
   yarn
   ```
1. Setup Sanity
   ```
   cd app/sanity && sanity init
   ```
   This will prompt you if you want to reconfigure the project. Answer yes and follow instructions to create a new project.
   
1. Remember to configure an .env.local file (see the .env.template for details)
   * `NEXT_PUBLIC_SANITY_DATASET`     (it's more than likely "production")
   
   * `NEXT_PUBLIC_SANITY_PROJECT_ID`  (check Sanity.json for this)
   
   * `SANITY_API_TOKEN`               (you need to generate this from the sanity website under API's)
   
   * `SANITY_PREVIEW_SECRET`          (you can create a new hash or use what's in `/apps/sanity/resolveProductionUrl.js`)
   
   * `SANITY_URL`                     (after running `sanity deploy` in the Sanity directory, it's the URL it spits out)
   
   Once all of the above is done you can run a `yarn dev` from the root directory and it will "just werk"

## Notes

In development (using `yarn dev`)

- The Next.js application will run on https://localhost:3000
- The Sanity Studio dev server will run on http://localhost:3333/studio

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app
- `sanity`: a [Sanity](https://sanity.io) CMS
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Chakra UI](https://chakra-ui.com) an awesome frontend framework similar to tailwind


### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd turbo-sanity-next
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
