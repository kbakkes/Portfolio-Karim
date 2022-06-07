 
export const glossary = {
    home_title: 'Karim Bakkes',
    home_subtitle: 'Creative Web Developer',
    landing_image: '/images/kb.webp',
    about_text: "<div>Hi! Great to meet you, I'm Karim Bakkes 👋. My passion lies in the creation of technical and visual aspects of digital products. I am specialized in Front-end development and am experienced with back-end tasks. I really like to keep up with the latest techniques in web development to keep myself up to date with the fast pace of technological advancements in the field.</div><div>I have a Bachelor’s degree in <a href='https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/creative-media-and-game-technologies/voltijd/' target='_blank'>Creative Media & Game Technologies</a> from Hogeschool Rotterdam 🇳🇱 and I am a certified Magento 2 Front-end Expert.</div><div>In my experience, making data visible and interactive for users is one of the most fulfilling and exciting parts of web development. In my spare time, I like to work on hobby projects to improve my Javascript skills and to familiarize myself with newer techniques such as Redux. Feel like keeping in touch? Feel free to send me a message on <a href='https://www.linkedin.com/in/karim-bakkes-586247b0' target='_blank'>LinkedIn</a>, or send me an <a href='mailto:karim.bakkes@gmail.com'>e-mail.</a> 😁</div>",
    about_subtitle: 'About me',
    about_title: 'Nice to meet you!',
    skills_title: 'Skills & Tools',
    skills_subtitle: 'The skills, tools and technologies I use',
    skills_text: '<div><p><strong>Programming Languages</strong><br><span>JavaScript, Typescript, PHP</span></p><p><strong>Front-end</strong><br><span>React, NextJS, Tailwind CSS, Sass, jQuery, Knockout.js</span></p><p><strong>Back-end</strong><br><span>NodeJS, MongoDB, Symfony</span></p><p><strong>Tools</strong><br><span>Magento 2, Git</span></p><p><strong>Certifications</strong><br><span>Adobe Commerce Front-end Developer</span></p></div>',
}


export const skills = [
    'ReactIcon','Sass','Magento','TypescriptIcon','Github','Next','Node','JavaScriptIcon','Jquery','Tailwind'
]

export const projects = [
    {
        name: 'Max Revive',
        key: 'max-revive',
        content: "<div>Max Revive is a staking platform for 'rugged' crypto currencies. The platform is also suitable for handling crypto transactions, because it can linked to a user Metamask Wallet. In collaboration, I've developed this one pager with NextJS, where I was responsible for about half of the activities. This project has most of all learned me to work on a React based project in a group setting.</div><div>The activities mostly consisted of bringing the design to life by creating components, adding styling and optimizing images. Sass was used to style the components in combination with CSS modules,so that the styling could be split up per component.</div><div>Check out the <a href='https://maxrevive.io' target='_blank'>website</a></div></div>",
        image: '/images/maxrevive.webp',
        tags: ['Javascript', 'React', 'NextJS', 'Sass']
    },
    {
        name: 'Magento 2',
        key: 'magento',        
        content: "<div>I have worked with Magento 2 for multiple years. My main activities consist of setting up and styling pages of the webshops. The styling developed via Sass where I'm used to work with BEM & Atomic Design. I also have experience in creating custom modules which are developed with PHP logic. I am also experienced with adding Javascript to Magento 2 shops, mostly with the help of jQuery. </div><div>To see my Magento 2 Certified Front-end Developer Certificate, use the following reference number: <a href='https://www.certmetrics.com/adobe/public/verification.aspx' target='_blank'>2E60J8SCCBFQQR3P</a> </div>",
        image: '/images/magento.webp',
        tags: ['Magento 2 ','PHP', 'Javascript', 'Ecommerce']
    },
    {
        name: 'Spotify App',
        content: "<div>The Spotify App is a React Based application which I developed in my free time. Spotify Users can use the app to see their listening behaviour. The goal for this project was to further develop my Javascript and React skills, and to familiarize myself with the usage of Reducers. The hardest part when building the application was handling Facebook's Oauth authorization inside the state. I used session storage to check whenever as user has been authorized so that a new token won't have to be retrieved. </div><div>To see the code, visit <a href='https://github.com/kbakkes/Spotify-App' target='_blank'>Github</a></div>",
        key: 'spotify',
        image: '/images/spotify.webp',
        tags: ['React','Data Handling', 'State Management', 'Oauth']
    },
    {
        name: 'Ring Collector',
        key: 'ring-collector',
        content: 
        "<div>Ring Collector is a singpleplayer game developed with Typescript. The goal of the game is to pick up rings and get the highest score possible. The code uses all kinds of design patterns such as the observer, strategy, factory and decorator pattern.</div><div>Animations were mostly developed using the CSS <code>transform</code> property. The input is handled by multiple event listeners who then change the object's position based on the pressed key.</div><div>View code on <a target='_blank' href='https://github.com/kbakkes/Ring-Collector'>Github</a></div>",
        image: '/images/ringCollector.webp',
        tags: ['Game Design','Game Development','Typescript',]
    },
    {
        name: 'Oh Trap!',
        content: "<div>Oh Trap! is a couch co-op game for 2 to 4 player where it's the objective to capture eachothers treasures, traps are a core mechanic of the game. During this project I mostly worked on game design, such as character movement, trap mechanics and additional game modes. </div><div>This project was part of the Minor Game Design and Development, at the Hogeschool Rotterdam. During these 12 weeks I've learned to work on a relatively long project with a big group, consisting of 16 people. </div> <div>Check out the <a href='https://store.steampowered.com/app/994520/Oh_Trap/' target='_blank'>Steam page</a></div>",
        key: 'oh-trap',
        image: '/images/ohtrap.webp',
        tags: ['Game 🕹','Game Design','Game Development']
    },
]