import { useEffect, useState } from "react";
import homeImg from './public/assets/homeimg.png';
import home_ic from './public/assets/icons/home-cre.png';
import mail_ic from './public/assets/icons/mail-cre.png';
import proj_ic from './public/assets/icons/proj-cre.png';

import upwork from './public/assets/icons/upwork.png';
import fiverr from './public/assets/icons/fiverr.png';

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

// Mouse Move
export default function useEvent(event, handler, passive = false) {
    useEffect(() => {
        // initiate the event handler
        window.addEventListener(event, handler, passive);

        // this will clean up the event every time the component is re-rendered
        return () => window.removeEventListener(event, handler);
    });
}


// Static Data
export const navbar = [
    {
        name: 'Home',
        href: '/',
        icon: home_ic
    },
    {
        name: 'works',
        href: '/works',
        icon: proj_ic
    },
    {
        name: 'contact',
        href: '/contact',
        icon: mail_ic
    },
];

export const external = [
    {
        icon: upwork,
        target: 'https://www.upwork.com/freelancers/~01c2e5116b1ee78ab7'
    },
    {
        icon: fiverr,
        target: 'https://www.fiverr.com/tayef47?up_rollout=true'
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
                href: "works"
            },
            secondaryBtn: {
                text: "Contact Me",
                href: "contact"
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
