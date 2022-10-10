
## Installation

Clone this repo and run 
```bash 
  yarn install
```


## Scripts

```yarn dev``` to start the development server <br/>
```yarn build``` to build the application for production usage <br/>
```yarn start``` to start a production server <br/>
```yarn lint``` to set up Next.js's built-in ESLint configuration <br/>
```yarn generate``` to [generate a boilerplate](https://github.com/aliYaakoub/next_ts_template#generating-boilerplates) <br/>
```yarn format``` to check if your code is formatted (prettier plugin) <br/>
```yarn format:fix``` to fix any unformatted files <br/>
```yarn lint:ts``` to check for any unlinted files <br/>
```yarn prisma:generate``` to Generate Prisma Client <br/>
```yarn prisma:generate:watch``` to generate Prisma Client and continue to watch the schema <br/>
```yarn prisma:studio``` to open prisma studio <br/>
```yarn prisma:db:push``` Introspects the database to infer and executes the changes required to make your database schema reflect the state of your Prisma schema <br/>
```yarn prisma:db:pull``` Connects to your database and adds Prisma models to your Prisma schema that reflect the current database schema <br/>


## Libraries used

1. [Tailwind CSS](https://tailwindcss.com/)
2. [react-redux](https://react-redux.js.org/)
3. [redux-saga](https://redux-saga.js.org/)
4. [react-query](https://react-query-v3.tanstack.com/)
5. [Prisma](https://www.prisma.io/)
6. [react-hook-form](https://react-hook-form.com/)
7. [Yup](https://www.npmjs.com/package/yup)
8. [next-i18next](https://github.com/i18next/next-i18next)
9. [react-modal](https://www.npmjs.com/package/react-modal)
10. [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
11. [react-lottie](https://www.npmjs.com/package/react-lottie)


### For formating and linting

1. [Prettier](https://prettier.io/)
2. [Eslint](https://eslint.org/)


### Generating boilerplates

run ```yarn generate``` to generate a page, component, redux slice, modal or an api route.

to learn more about file generation check [Plop Docs](https://plopjs.com/), and if you want to change any configuration or templates check the ```.internals/generators``` folder in the root.


### External Resources

Pictures and icons from [Undraw](https://undraw.co/) <br/>
Loading JSON file from [Lottie Files](https://lottiefiles.com/)