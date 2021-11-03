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
- A custom plugin is created for a multi-use CSS style for repeated usage in the /styles/global.css.
- Using relative and absolute utility classes, create a bouncing anime number on the option for effect.
- Stick the header to the top.
- The Feed component to carry the posts and the suggestions in the application.
- The Feed has two sections to carry the stories and Posts in one and the mini profile and suggestions in the other section.
- A sub component to create Stories is created.
- The whole Feed component is like a css grid with only one column in mobile and different columns with varient size.
- The data in the stories component was populated from [faker.js](https://github.com/marak/Faker.js/) library. This library is for generating random-realistic fake data for testing and portfolio enviroments.
- Map through an array of faker objects with fake data populated from useEffect in the Stories component and get access to them in the Feed.
- Style the story scrollbar with a scrollbar plugin in the configuration with tailwind scrollbar.
- The Posts and Post components to carry the posts in the application are created and stlyed in grid pattern.
- The necessary options in a post component are added to the individual post component and styled with custom plugin.
- A caption box to display the text and the username of the post below the buttons.
- The input box is created before the comments sections.
- The miniprofile of the user and the suggestions from the instagram components are created and styled for mobile and desktop views.
- A custom sign-in page with nextAuth—authentication system for google with next js—is created.
- Beta versions are prone to breakings, so lock the version in packages.json by removing (^) from the version.
- The Auth setup is created in `/pages/api/auth/[...nextauth].js` file.
- The provider varies from google to github and the credentials are stored in env variables.
- To fire the credentials and power the build, the firebase v9 is used.
- Once the webapp is setup, the google provider is setup and the Web SDK configuration is enabled for confidentiality.

* By default, the next js doesn't make any env variables public, unless a string 'next_public_the name' is added to the env for allowing the client to access the server in the appication.

- The standard authentication page is setup in the [...nextauth].js file by default with the provider configuration. To customize the screen, add in the theme setting to add logo, brandColor and theme to the page and pages setting to add signIn page location.

- The page location is in /pages/auth/fileName.js. It is the conventional standard the next js recommends to setup auth pages.

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
