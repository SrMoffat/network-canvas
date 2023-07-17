## Network Canvas

### Timebox
Up to 37.5 hours; a typical work week.

## Workflow Requirements
Document your development progress during each day using your git commit history.

## Technologies
- [] NextJS 13.4 (or later) using Typescript and the app router.
- [] Tailwind for CSS styling.
- [] Next-Auth (auth.js) for authentication.
- [] Prisma for data storage, using the sqlite adapter.
- [] Vercel for deployment.
- [] You may optionally use additional libraries as you see fit.

## Feature Requirements
We would like you to create and deploy a NextJS application that contains the following features:
- [] A user system comprising three roles: `admin`, `user`, and `participant`.
- [] A user can sign up for an account with using the `Github OAuth` provider (GUI). Default role is `participant`.
- [] A user can login to their account using the `Github OAuth` provider (GUI).
- [] A user can change their role to any other; changes should be reflected on the GUI.
- [] Add a page to allow uploading JSON file that is only visible to authenticated users with role `admin`. The uploaded file should be added to a SQLite DB using Prisma.
- [] Add a page to all authenticated users to display all the uploaded JSON files and download any of them.
- [] Add an API route handler at the URL `/api/admin` accessible to only authenticated users with `admin` role  that returns a list of all users on the system.
- [] Add an API route handler at the URL `/api/public` accessible to both authenticated and unauthenticated users that returns the most recently uploaded JSON. 
- [] Implement language localisation for all pages. Implement English as a minimum, and optionally use either your own second language or Google Translate to add an additional language of your choice.
- [] Have the app default to the user’s language, but have the language be selectable via a UI element.
- [] Style any pages/UI you create using Tailwind, including light and dark mode support. Light and dark mode should be togglable from a UI element.
- [] Host your code in a github repository, and ensure that your daily work is documented in your commit history.
- [] Publish your app to Vercel’s hobby tier, and send your github repository and your deployment URL to us.

## Assessment Criteria
- [] Code quality and style, as well as application structure/component layout.
- [] Commit history, and commit message quality.
- [] Visual style and polish, including the use of appropriate styling, responsiveness, and use of animation (where appropriate).
- [] Completeness and correctness, including handling of errors and edge cases.

### Resources
[Database Model](https://dbdiagram.io/d/64b4f52502bd1c4a5e2f5293)
[Figma Designs](https://www.figma.com/file/mPcdodZa5etVOdpop3vHWd/Network-Canvas?type=design&node-id=0%3A1&mode=design&t=JQrG2DCQQptKb4na-1)
[Github Repository](https://github.com/SrMoffat/network-canvas)
