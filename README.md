# Instagram 2.0

Using Next-JS, the best developer experience to build the application with all features needed for production, an instant messaging and attachment sending application was build.

> Taliwind CSS framework provided the responsive design for the build.
> Custom nextAuth for Authentication and Authorization.

- The application included Recoil for state-management instead of Redux or reducers.

> The application runs on help with recoil and custom nextAuth and firebase V9.

## Process

- import the required dependencies & dev-dependencies from `npm install <package>`.

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
- A sub-component to create Stories is created.
- The whole Feed component is like a css grid with only one column in mobile and different columns with varient size.
- The data in the stories component was populated from [faker.js](https://github.com/marak/Faker.js/) library. This library is for generating random-realistic fake data for testing and portfolio enviroments.
- Map through an array of faker objects with fake data populated from useEffect in the Stories component and get access to them in the Feed.
- Style the story scrollbar with a scrollbar-plugin [tailwindcss-scrolbar](https://www.npmjs.com/package/tailwind-scrollbar) in the configuration with tailwind scrollbar.
- The Posts and Post components to carry the posts in the application are created and styled in grid pattern.
- The necessary options in a post component are added to the individual post component and styled with custom-plugin with [headlessui](https://headlessui.dev/).
- A caption box to display the text and the username of the post below the buttons.
- The input box is created before the comments sections.
- The miniprofile of the user and the suggestions from the instagram components are created and styled for mobile and desktop views.
- A custom sign-in page with nextAuth—authentication system for google with next js—is created.
- Beta versions are prone to breakings, so lock the version in packages.json by removing (^) from the version.
- The Auth setup is created in `/pages/api/auth/[...nextauth].js` file.
- The provider varies from google to github and the credentials are stored in env variables.
- To fire the credentials and power the build, the firebase v9 is used.
- Once the webapp is setup, the google provider is setup and the Web SDK configuration is enabled for confidentiality.

* By default, the nextjs doesn't make any env variables public, unless a string 'next_public_the name' is added to the env for allowing the client to access the server in the appication.

## Authentication

- The standard authentication page is setup in the [...nextauth].js file by default with the provider configuration. To customize the screen, add in the theme setting to add logo, brandColor and theme to the page and pages setting to add signIn page location.

- The page location is in _//pages/auth/fileName.js/_ It is the conventional standard the next js recommends to setup auth pages.
- The server side rendering and getting provider from the next-auth/react is required to provide the required authentication.
- The authication provided was on the developer side. The request to allow the contents of the application has not been reviewed/verified by the google.
- Select the _/credential/_ option in the **API and Services** from the [google cloud](cloud.google.com/cp).
- Any google Authentication goes through a protocol called OAuth 2.0. Edit the OAuth Client ID to add the current localhost env to authorise the application and the vercel deployed website domain to the client ID later.
- Add the redirect url from the Google error page to the Authorized redirect url in the google cloud platform and the deployed website domain later to the redirect url.
- The google allows the redirect url to authrize the application and grant access and log in to the application.
- Wrap the component in _/\_app.js/_ in session provider to hold the login session throughout the application unless logged out. It was like a next-auth session wrapping the entire application.
- Extract the user data from the google account using session in the Header component. Google may fail to respond the requests from 3rd party authentications sometimes.

- The instagram page before login only displays the home and menu options. A clause to only show the remaining options if there's a session is added to the logic. And the signIn and signOut functions from the next-auth are implemented.
- To redirect the correct structure to the application, the signIn page is customized as per requirement. The Header component is added to the signIn page and styled with tailwindcss.
- The return back to homescreen after logging is fixed with passing an object {callbackUrl: "/"} in signInProvider button.
- Once the redirect url and session to log the user in are created, modify the header, miniprofile to take the user data accordingly. The header carry signIn and signOut functions from next-auth.
- The Minprofile hardcoded data needs to be replaced with the user data, but the login state session only provided a limited data about the user (email, image, name).

- Tap into the callback option in the [...nextauth] to rewrite and update the user data before and after the session. The new session user-data contains the uid, image and username from google.
- A conditional render to the Miniprofile and Suggestions to exist only when a session remains in the application in the Feed component is added.
- The main part of the Feed is styled to the left with the absence of miniprofile and suggestions in the Feed. The styling is converted to jsx to add a condition to bring the main to the page center.
- The Story component uses the session to add the user as a story to the application. The rate-limiter in the google might obstruct from using/accessing the user-data repeatedly. It's because the request/receiver and the sender are from the same local env, which is a non-https source. It doesn't happen with an https source.

* Routing

- The next-js inbuilt router is used for shifiting between pages in an application instead of a.href tags.
- The routing is like a push/pull pages from the application stack.
- useRouter() function from next/router and the parent div of the associated image is added an action onClick to push to the app to homepage.

* Upload using a Modal.

- To add a functionality to add a modal from the modal UI from tailwind css.
- To use firebase storage to upload an image to firebase database.
- The global store wraps around the entire application and the value of the state can be changed from anywhere in the application.
- Import the recoil dependency from [recoil](https://recoiljs.org/)
- Wrap the entire application in \_app.js with the RecoilRoot to initiate the global store, just like for the redux to push/pull the state from any level in the app.
- Recoil is not persistant, but a plug-in can make it persistant.
- atoms in Recoil is similar to slices in Redux where different atoms comprise different information. (user, modal.,)
- A modalAtom responsible for modal information is created for global state management for the modal. The state management has key:value pair with a key and a default value.
- To pull the info from the global state, useRecoilState(), similar to useState() is used. The state is parsed as the argument.
- The read-only version is obtained from useReciolateValue(). The setOpen is set in the associate tailwind UI icon.
- A similar state is created in the component responsible for modal information and tap into the state from the global store using useRecoilState().
- The modal is where the file-picker and the file upload logic is created.
- @headlessui/react to build completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- Trasitition and Dialog for customizing the modal component from the @headlessui/react.
- The root and child sub-elements in Transititon component to grant a element within the modal whereas Overlay positions the text part of the modal.
- An uploadPost function to perform the document to firebase storage and fire the firestore.
- To avoid any time losses during the image loading, a state to time the sequence in the correct order is created.
- The test mode database is created in the _/cloud firestore/_ from firestore database menu.
- set the testing _/storage/_ rules to allow read; write functions.
- Create a post and add to firestore 'posts' collection and get a post ID for the newly created post.
- Upload the image to firebase storage using the post ID and get a download URL using _/getDownloadURL/_ method.
- Then update the original posts in the firestore database with image using _/updateDoc/_ method from firestore and firebase storage imports.

* Post Components

- The image stores in the firebase storage as temporary file, providing a downloading link to the firestore database. The image link changes as it transfers from storage to firestore.
- Pull the image from database to front-end and render it in positon to display the latest update.
- Pull the information from database and render the image in Post in real-time.
- use a state for posts and a useEffect to listen from the backend for continuous updates. Create a snapshot listener on firebase with query method in the useEffect with db as dependency(passing values)
- map the data from firestore to the Post component with an additional syntax of _/data()/_ added to the values.
- The Asynchronous loading of upload images is rectified with server side rendering.
- A conditional render to buttons in the uploads using a session is created.

* Comments

- A state to handle _/comments/_ in the Post component. Another state to map the _/comment/_ in the input box is created in the Post component.
- The form is set to recieve the comment and the button was disabled to blank comments (spaces) and a function to sendComments is created for it.
- A new helper function to create a new collection the existing _/posts/_ and add the document data to it.
- The comment section structure is created with conditon (comments.length > 0)
- import react moment dependency to parse timestamp to the comments according to the location.

* Likes

- A nested collection called _/Like/_ inside each post is created similar to the commet function and parse it through.
- A piece of state for likes, a click functionality and then map it to the likes.
- Each _/like/_ document in the post collection was made sure to name using the userID (instead of a random ID) with the user data for allowing a like/dislike the post once per user.
- Liking the post adds the document to the post collection and unliking the post deletes the document from the collection.
- Populate the like/dislike algorithm to a post in useEffect where the index of the given like/dislike is matched with the uid of user issued the like in the database.
- set the UI logic based on the like/dislike property.

# Next.js + Tailwind CSS.

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

The next js dependency required for tailwind to operate must be installed with latest version.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## Usage

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```
bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
