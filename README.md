# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./public/images/Frontend%20Mentor%20NFT%20preview%20card%20component.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

In this project I've decides to put the NFTs data in a separate file, specifically in the nfts.js file inside an object where I would import them to the NftCard component and pass them as props. I've realized by doing so I needed to put the images that I wanted to pass via props from the nfts.js file have to be put inside the public folder and when referencing to their src I had to prepend ```process.env.PUBLIC_URL +```  before the relative path, as in the code below:

```js
const nfts = {
    id: 1,
    imageSrc: process.env.PUBLIC_URL + "./images/image-equilibrium.jpg",
    imageAlt: "Ethereum crystal cube",
    imageTitle : "NFT image",
    nftTitle: "Equilibrium #3429",
    nftDes: "Our Equilibrium collection promotes balance and calm.",
    avatarImage: process.env.PUBLIC_URL + "./images/image-avatar.png",
    avatarName: "Jules Wyvern"  
};

export default nfts;
```

### Continued development

I used props in this project to pass the imported data from a js file to a jsx component file, I have the intension on continuing using the styled-components so that I would style those passed props with it.


### Useful resources

- [Using the public folder in a React project](https://create-react-app.dev/docs/using-the-public-folder) - I used this documentation to understand the difference between using the public folder and src folder for images in a React app.

## Author

- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)

