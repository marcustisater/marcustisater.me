---
title: How we built postcss.org with an open source team of collaborators
date: 2016-01-22
hero: https://cloud.githubusercontent.com/assets/11071/12518954/03429518-c13c-11e5-9df3-86582a60604f.png
layout: Post
---

Last week we publicly announced [postcss.org](http://postcss.org), the official website for PostCSS. It has been a big honor for me to be leading this open source project from the start together with some very talented people, and I couldn’t have done this without their help. I would like to tell you about its journey and future to come.

The purpose we had in mind from the very beginning was to build a website crafted by the PostCSS community itself; this was our vision and also a difficult task for us to tackle.

## Scrum

This was my very first time being a project lead for an open source project and I have to say right away, it was not all sunshine. It’s very different from how it is done at work where you have a complete team that works together for eight hours a day but I have to admit - it was actually really fun and I enjoyed the time organizing things and talking to developers from across the globe. I talked to a lot of contributors during the making of postcss.org and received tons of feedback; all of them being very nice and helpful.

One important thing I learned is not to over-complicate things, don’t make hundreds of issues, multiple milestones, or project meetings. Keep it very lightweight. People like it easy-going when it comes to the open source project world — they are not at work and usually don’t have a lot of time. Don’t set deadlines, pressure or anything like that. Keep things simple but not confusing, and be there to help those who are willing to contribute.

### Things I’ve learned:

* Don’t over-complicate things.
* Don’t set deadlines.
* Use gitter/slack for quick communication but keep important discussions in github issues, synced if possible.
* We had one startup meeting and that was big plus to receive feedback/ideas.
* Documentation is key for making it more accessible for new contributors to join in.
* Make it fun – be open to suggestions and PRs.

## Open Source Design

Let’s jump into Open Source Design (OSD). OSD is a bit tricky and every open source project has their own way of “dealing” with it, there is no correct way of organizing things. Designing was one of the more popular demands from the community to help contribute to. We all agreed on making it as accessible as possible for everyone to contribute and have open discussion about everything even if that would take a little extra time to decide and agree on things.

## The visual design

I would like to take the time to thank everyone who posted a few design ideas for the website itself and especially Andrey Okonetchnikov for creating the final complete visual design for postcss.org with help and feedback from the team. Here are some of the design sketches and progress.

![postcssmockup](https://cloud.githubusercontent.com/assets/38894/12145751/e000ced4-b444-11e5-93d8-ebf5a4444f02.png)

![postcssmockup](https://cloud.githubusercontent.com/assets/38894/12274343/5458a462-b91f-11e5-8f20-3264402ba196.png)

![postcssmockup](https://cloud.githubusercontent.com/assets/11071/12262127/0a7442fa-b926-11e5-8531-9402d2a21fbb.png)

![postcssmockup](https://cloud.githubusercontent.com/assets/11071/12272128/06ce7b14-b95f-11e5-8f35-30f189820884.png)

![postcssmockup](https://cloud.githubusercontent.com/assets/11071/12445760/84ce0e96-bf66-11e5-9adf-39e3abe3f438.png)

![postcssmockup](https://cloud.githubusercontent.com/assets/11071/12518954/03429518-c13c-11e5-9df3-86582a60604f.png)

### Zeplin?!

We hosted the visual design sketch files at Zeplin on top of Github as well. I personally really enjoyed working from Zeplin from a developer’s perspective, especially as I could get an better overview of colors, assets, and typography, kind of like an style guide. I think it’s been that missing communication piece between designers and developers; it was really smooth and I would gladly use it again in another project.

What’s also really nice about Zeplin is that you can publicly show the design from a simple URL. We were available to post that on social media and share to others for quick feedback. https://scene.zeplin.io/project/56a3….

Thank you, Zeplin, for hooking us up with a free plan!

## The Brand

We made some changes to the brand of PostCSS. The new official logotype has new typography and some other color changes. There is a new open repository —PostCSS Brand that covers the entire brand of PostCSS. Shout-out to Stephen Wayfor making that happen. Go ahead and check that out.

Here is the logo, split up into multiple svg files.

## Development

On to the fun part. Development. While the designers were splashing colors, the developers were setting up the boilerplate. We wanted to make it fun, so testing out new tools, best practices, and really sharing our knowledge with one another was a key part in making learnable progress and successful project development.

### React

The popular JavaScript Library React is a fast user interface created by Facebook. React abstracts away the DOM from you and simply render a view in HTML. It works with so-called “components,” which are small, reusable, and modular parts of our website. We also tried sticking to the ES6 syntaxes, which was quite hard, if you ask me. If you would like to know more about how we use React at postcss.org Read more here

### Phenomic

When we started the planning, Maxime Thirouin had been building this thing called Phenomic for the past year. Phenomic is a static generator that creates dynamic content using React components. The way it works is that the content is automatically generated by markdown (.md) files and rendered to the website.

“During development, enjoy the benefit of hot loading with visual errors in your layout! That means you won’t have to refresh your page during development when you will edit your pages.” - Phenomic

This generator really fit our project perfectly. If you like static generators and React, you should really take the time to look into Phenomic; it’s a fantastic open source project. Show them some love.

### CSS Modules

If you haven’t read Mark Dalgelish’s article, The End of Global CSS, you should consider giving that a read. CSS Modules in short terms is when CSS file(s) with class names are scoped locally by default. When we write JavaScript components at postcss.org we can import the styles and “isolate” them. It works like this.

```
import styles from "./index.css"

<div className={ styles.info }>
  <p className={ styles.license }>
    { "Distributed under the MIT License." }
  < /p>
< /div>
```

This means that there would never be any conflicts, overriding rules or global scoping in this matter. It really takes CSS to the next step and I realized that naming conventions like BEM really are just bloated specificity in our HTML that has to suffer, making the browser do more work.

Take your time to go through the CSS Modules as we are most likely going to see more of this in the future.

### Linting with Stylelint & ESLint

Linting can hurt feelings but also keep you under the best practices and guidelines. We chose to go with two linters, one for CSS and one for Javascript.

For our styles, we used the PostCSS-powered Stylelint and configured it using thestylint-config-standard shareable config.

For Javascript we went the more obvious choice today, ESLint. Configured as i-am-meticulous.

We also added a pre-commit hook that kept people from pushing things that haven’t passed the linters or compression of SVG. It might feel a bit “hardcore” but it’s worth the time to ensure that all collaborators follow the project guidelines.

### LGTM

Let me tell you about this last tool that we are using. LGTM(Looks good to me) is basically a way to enforce pull request approvals before merging it into an branch. We set this up for the master branch to make sure that everything gets reviewed before being accepted into production. This was also a great learning opportunity to review each other’s commits.

I don’t want to drag this out too long so that’s it for development - We also used Redux, Babel, webpack and (obviously) PostCSS. Read more at our documentation

## Documentation

We spent a lot of time on the documentation, and that was really the key of getting more people involved into the development and learning more about the tools that we are using. I think documentation has always been a key factor to feeling more comfortable working and getting to know something; otherwise, it’s often compared to working in the “dark”.

Milestone 1.1

We already have big plans for the upcoming releases for postcss.org. We are going to focus on having documentation pages, plugin search, AST Explorer, Wizard setup for PostCSS Build packs and much more. We are really looking forward to the next milestones releases.

Take a look at Milestone 1.1

## Thank you!

To be honest, the point of this short post is not to drag or show off; it’s really more about me expressing my gratitude toward the PostCSS community and the open source ecosystem that we have today.

It’s really a great pleasure to work with these amazing contributors that have put a lot of time into this project. I would like give each and every one a very big THANK YOU for the help of release 1.0 and for their continued support and dedication.

## Contributors for release of PostCSS.org

Andrey Sitnik, Andrey Okonetchnikov, Richard Hallows, Maxime Thirouin, Max Stoiber, Stephen Way ,Khoa Nguyen, Halvves, Aleks Hudochenkov and Max Shearer.

I have learned a ton from these people, thank you!

We shall not forget the people behind the actual tool PostCSS itself. THANK YOUto every core contributor and plugin developer who is spreading the love of PostCSS. Let’s make 2016 a great year for PostCSS.

To the future!
