## 🚀 Quick start

Navigate into the directory and start it up.

```shell
npm run develop
```

Build the project
```shell
npm run build
npm run start
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.
    
    ├── node_modules
    ├── src
    ├───── components
    ├──────── hooks
    ├──────── styles
    ├───── images
    ├───── pages
    ├──────── layout
    ├── .gitignore
    ├── custom.d.ts
    ├── gatsby-config.js
    ├── package-lock.json
    ├── package.json
    └── README.md
1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
2. **`/src/components`**: This directory will contain all of the code related to reusable components
3. **`/src/components/hooks`**: This directory will contain all custom hooks
4. **`/src/components/styles`**: This directory will contain all style wrapper, this is the only one with  **.js** extention since its just a css wrapper I dont need `typescript` inside
5. **`/src/images`**: This directory will contain all images
6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

### 🧐 Why GatsbyJS?
1. I'm more used to ReactJS but I don't want to use plain ReactJS because of scalability limitations, so my only options are either GatsbyJS or NextJS. NextJS seems overkill so Gatsby is the right choice.
2. If I decided to continue this project I may able be to do more on Gatsby that in reagular ReactJS given the following feature (SSR,SSG, GraphQL). and a number for headless CMS to choose from.
3. Comunity support and maturity of the framework is great!

##  Temperature Conversion
There are two Input fields that takes in value and then convers it into specific scale 
**(c:  'Celsius', f:  'Fahrenheit')** depending which input field they used.

**Celsius Temperature Conversion Formula**
[°F] = [°C] × 9/5 + 32

**Fahrenheit to Celsius Conversion**
[°C] = ([°F] − 32) × 5/9

![enter image description here](https://i.ibb.co/m8TKwGx/full.png)



 - The arrow in the middle will point to the direction where the converted value returns. 
 - To makesure users wont type any other character other than number and (-) I had to make a regex that filters that out.
 - Input fields width(size) will auto adjust depending on how many characters are there


##  Theme switch

It's based on the convention used by [styled-components](https://styled-components.com/docs/advanced) 

 1. We set `default theme` which is `light` on our `state` that then gets updated on click using `setState`function. To make sure the browser remembers what theme users selected we saved that information aswell in the `window.localStorage`
 2. Then we use that theme information as a property down to its component
```shell
import  styled, { ThemeProvider } from  'styled-components'
<ThemeProvider  theme={themeMode}>...</ThemeProvider>
const  Main = styled.main`
	background: ${({ theme }) =>  theme.body};
	color: ${({ theme }) =>  theme.text};
`;
```

## UI Design
Everything is centered the screen except the toggle theme, to make sure it displays the in the best way possible both on desktop and mobile.

 - I created a curved shadow in the middle to create a division between two inputs.
 - I was planning on changing the backgrounds based on the current temperature but it will not match the requirements (light/dark) theming.
**hot**: orage - red shades
**cold**: blue - orange shades


