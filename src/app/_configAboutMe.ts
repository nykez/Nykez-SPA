import { Person } from './_models/Person';

let person: Person = {
    name: "Jordan (Nykez)",
    
    socialLinks: [
        { style: "fab fa-github-square fa-2x logo animate__animated animate__bounceInLeft", url: "https://github.com/nykez"},
        { style: "fab fa-steam-square fa-2x logo animate__animated animate__bounceInLeft", url: "https://steamcommunity.com/id/jordanlol633"},
        { style: "fab fa-discord fa-2x logo animate__animated animate__bounceInLeft", url: "https://discord.gg/jg96mKk"},
        { style: "fas fa-share-alt-square fa-2x logo animate__animated animate__bounceInLeft", url: "https://www.gmodstore.com/users/76561198011844757"}
    ],

    titles: [
        "Software Engineer",
        "a human being",
        "Avid Programmer",
        "a gamer",
        "gmodstore curator",
        "gmodstore creator",
        "workshop creator",
        "lua programmer",
        "csharp developer",
    ],

    avatarUrl: "/assets/missing.jpg",

    aboutMe: `Hello, my name is Nykez (Jordan). I started programing in 2009 when I discovered Garry's Mod (a game by facepunch).
    This sparked a unknown passion for me! I continued to 'mod' games off and on for many years until deciding to pursue Computer Science in college.
    Years later, I graduated with a Bachelors in Computer Science and continued my passion into a full time career - Software Engineering.`
}

export default person 