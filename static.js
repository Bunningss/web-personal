import { useEffect, useState } from "react";
import homeImg from './public/assets/homeimg.png';

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
        href: '/'
    },
    {
        name: 'ABOUT',
        href: 'about'
    },
    {
        name: 'works',
        href: 'works'
    },
    {
        name: 'contact',
        href: 'contact'
    },
];

// Section Data
export const homeData = {
        image: homeImg,
        id: "home",
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
    }

export const aboutData = {
        image: '',
        id: "home",
        text: 'Highly motivated web developer with 2 years of Front-end development experience using React JS and SCSS/SASS and 1 year of Back-end development experience. I prefer working with Node JS, Express, MongoDB and React stack for full stack development projects.',
        data: {
            text: "about\nme",
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
    }
