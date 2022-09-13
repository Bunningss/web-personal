import { useEffect, useState } from "react";

export const getheight = () => {
    const [ height, setHeight ] = useState(0);
    const handleScroll = () => {
        setHeight(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return height
}

// Static Data
export const navbar = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'works',
        href: '#works'
    },
    {
        name: 'contact',
        href: '#contact'
    },
];

export const homeData = {
    text: "TAYEF\nMAHMUD",
    about: "Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.",
    primaryBtn: {
        text: "Works",
        href: "#works"
    },
    secondaryBtn: {
        text: "Contact Me",
        href: "#contact"
    }
}

// Test

export const section = [
    {
        images: [],
        data: {
            text: "TAYEF\nMAHMUD",
            about: "Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.",
            primaryBtn: {
                text: "Works",
                href: "#works"
            },
            secondaryBtn: {
                text: "Contact Me",
                href: "#contact"
            }
        }
    },
    {
        images: [],
        data: {
            text: "my\nskills",
            about: "Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.",
            primaryBtn: {
                text: "Works",
                href: "#works"
            },
        }
    },
    {
        images: [],
        data: {
            text: "previous\nworks",
            about: "Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.",
            primaryBtn: {
                text: "Works",
                href: "#works"
            },
            secondaryBtn: {
                text: "Contact Me",
                href: "#contact"
            }
        }
    },
    {
        images: [],
        data: {
            text: "contact\nme",
            about: "Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.",
            primaryBtn: {
                text: "Works",
                href: "#works"
            },
        }
    },
];