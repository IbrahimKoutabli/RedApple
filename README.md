# Red Apple styling test

As this task is far more visual than functional, I focused solely on the design/animation as opposed to integrating APIs or showing how components fetch/process data and handle side-effects or store/state management via context or others.

# Running the project

To run the project after installing dependencies:

```
npm start
```

To build the project:

```
npm run build-prod
```

This will bundle the source code to /public folder and have the following structure
<br />
![Alt text](src/images/deployStruct.png?raw=true "Deployment structure")

Fonts, icons, SVGs and the like would have their own appropriate folder

The following gif shows the running app:
![Alt text](src/images/app1.gif?raw=true "App")

# Improvements

We can see from the gif above that the system does not match the mock-ups 100%. The following is missing:

- Matching the fonts
- Getting the exact sizes of text/svgs
- Getting the "Canada" style to be more heart shaped
- Bigger font for "Scroll to explore"

Although there is very little going on in this application the following general improvements could be made:

- Back icon in the pages to go back to the homepage
- Writing some tests
- Apply BEM for class names
- component library with tree shaking enabled
- trim package.json and optimise the bundle

# Time

I could only spend 2 hours setting up the repo, writing code/documentation.
