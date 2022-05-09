### Non Functional Requirements

# Each section of the homepage must be a separate react component

> Yes, each section of the React app is made to be a separate reusable component.

# No hardcoding of text in react app. All the content (text and images) must be coming from a Headless CMS through its API (Example API reference ).

> Yes, most of the content is coming from Contentful Headless CMS, but some texts which are supposed to be static are hardcoded (like button texts, image captions).

# Enable theming with just 2 colors i.e primary and secondary and font family

> Yes, the primary and secondary color scheme, and font family, size and weight are themed and used throughout the App to maintain uniformity. (defined at src/App.css)

# Create Typography components for H1, H2, Paragraph

> Yes, different Heading(H) tags are used for Typography as per requirement.

# Use Storybook for 3 UI components ...

> No, Storybook Framework have NOT been used, because I have never used it before and felt it really unnecessary to learn. Every requirement could be fulfilled wtihout it, so its not worth using.

# Prettier and Linter configuration

> Yes, the code is properly indented(Prettier) and documented. I have used typescript for this project to avoid possible warnings and errors - so no need for a linter :)

# Host the page on Netlify, Vercel or another provider.

> Yes, the app is hosted on Netlify. Website Link: https://assignment-by-paul.netlify.app

# Readme file on how to deploy and run the service.

> To deploy the app: npm run build, To run the app on local server: npm start (make sure you have 1. Node installed on the system. 2. Required Node_modules installed. )

# Add a checklist of the above items on ReadMe and check all the items before submitting the assignment.

> Yes, all the requirements are covered(either in Yes or No) in the README.md

### NOTE for evaluator - This project is made without the use of any styling or animation library. Everything is made from scratch truly by me, Sharadindu Paul. See the package.json for dependencies.

### Extras - Thank you so much for giving me the opportunity. I tried to give my best into this project. No piece of code is copied from any source. Please excuse me for any despondency, I am learning new things everyday. Hope you like it :)
