# Instagram 2.0

Using Next-JS, the best developer experience to build the application with all features needed for production, an instant messaging and attachment sending application was build.

> Taliwind CSS framework provided the responsive design for the build.
> Custom nextAuth for Authentication and Authorization.

- The application included Recoil for state management instead of Redux or reducers.

> The application runs on help with recoil and custom nextAuth and firebase V9.

## Process

- Refactor the starter template
- Layout of the Application is created- Header, Feed and Modal.
- A configuration file for whitelisting the domains for access by the next.js middle server is created and reload the server.
- Once the logo image is added, the breakpoints for different CSS styles w.r.t the screen size are at mobile by default. The breakpoints for different screen size are added as utility classes to the div.
- The search bar and the right option components are created and styled.

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

The next js dependency required for tailwind to operate must be installed with latest version.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```
bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
