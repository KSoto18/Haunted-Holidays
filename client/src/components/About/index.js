import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const About = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (

        <div className="aboutuspg-div">
            {/* pg title */}
            <h2 className="aboutpgtitle">About Us</h2>
            {/* subtitle paragraph section */}

            <section className="aboutussection">
                We are the "<i>Four Loopin' Ladies</i>"!
                <br /><br />
                <p class="fourloopinladies">

                    <button onClick={handleClick} title="See Iia's about info.">Iia Wolak</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={handleClick} title="See Karina's about info.">Karina Drummond</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={handleClick} title="See Khris's about info.">Khris Soto</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={handleClick} title="See Maggie's about info.">Maggie Lively</button>

                    <br /><br />
                    We met while enrolled in the Full-Stack Web Development Coding Bootcamp at UCF, and were tasked together to develop this application. <br /><br />
                    This project took a lot of time and dedication, and we will keep working on it to improve it's functionality and appearance with the skills we will continue to learn and develop while enrolled in the Coding Bootcamp.
                </p>
            </section>

            {/* iia's about info */}
            <div id="iiacard" className="individual-aboutinfo"
                style={{ display: toggle ? 'block' : 'none' }}>

                {/* profile img */}
                <img alt="Iia" className="profileimg" src="https://avatars.githubusercontent.com/u/113065214?v=4" />

                <h3 className="nametitle">Iia Wolak</h3>

                {/* about paragraph */}
                <p>
                    Iia Wolak also recently relocated to Orlando from      Tallahassee, Florida.
                    She received her Bachelor's Degree in Linguistics and Mandarin from the University
                    of Florida. After college, Iia worked in a local coffee shop for three and a half years, creating
                    latte art and smiles for a large customer base of Tallahassee locals.<br /><br />
                    Iia decided to enroll in the UCF Coding bootcamp to change her career path and mix
                    her love for languages with web development. Her dream is to create a language learning app!
                    In her free time, Iia loves to read really long books, study Mandarin and Japanese, and
                    visit local cafes and breweries.
                </p>

                {/* contact links */}
                <div className="contactlinks-container">
                    <a className="contactlinks" title="Send me an email!" href="mailto: wolaki96@gmail.com"><MdEmail size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    {/* ADD IIA'S LINKEDIN  */}
                    <a className="contactlinks" title="Connect with me on LinkedIn!" target="_blank" href="https://linkedin.com" rel="noreferrer"><FaLinkedin size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a className="contactlinks" target="_blank" rel="noreferrer" title="Check out my GitHub!" href="https://github.com/wolaki96"><FaGithub size={"1.5em"} /></a>
                </div>
            </div>

            {/* karina's about info */}
            <section id="karina" className="individual-aboutinfo"
                style={{ display: toggle ? 'block' : 'none' }}>

                {/* profile img */}
                <img alt="Karina" className="profileimg" src="https://avatars.githubusercontent.com/u/48260505?v=4" />

                <h3 className="nametitle">Karina Drummond</h3>

                {/* about paragraph */}
                <p>
                    Karina is a stay-at-home mom to four children, and wife to an active-duty Sailor.
                    She is a first-generation Dominican-American, born and raised in Miami. Before the Navy
                    relocated her family to San Diego in 2018, She lived in Orlando for 12 years and completed
                    her Bachelor of Science in Psychology in May of 2020, and her Master of Arts in Educational
                    Leadership in August of 2022 at UCF. <br /><br />
                    She decided to enroll in the UCF Coding Bootcamp to fulfill the desire she has always had to learn how to develop websites and apps. As challenging as the program has been, she is thoroughly enjoying every moment of it, and looking forward to completing the program and beginning her career in web development!
                </p>

                {/* contact links */}
                <div className="contactlinks-container">
                    <a className="contactlinks" title="Send me an email!" href="mailto: k.drummond528@gmail.com"><MdEmail size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a className="contactlinks" target="_blank" rel="noreferrer" title="Connect with me on LinkedIn!"
                        href="https://www.linkedin.com/in/karinadrummond/"><FaLinkedin size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a className="contactlinks" target="_blank" rel="noreferrer" title="Check out my GitHub!"
                        href="https://github.com/kdrummond528"><FaGithub size={"1.5em"} /></a>
                </div>
            </section>

            {/* khris's about info */}
            <section id="khris" className="individual-aboutinfo"
                style={{ display: toggle ? 'block' : 'none' }}>

                {/* profile img */}
                <img alt="Khris" className="profileimg" src="https://avatars.githubusercontent.com/u/113643158?v=4" />

                <h3 className="nametitle">Khris Soto</h3>

                {/* about paragraph */}
                <p>
                    Khris S. has worked over 10 years in the service industry. Most recently she had the pleasure of running a $10MiLL restaurant for the past 3 years and serve as an International Service Talent Staff that helps open new restaurant in other countries.
                    <br /><br />
                    Khris has allways had a passion for Computers and Technology which motivated her to persue a career change. She found the UCF Coding Bootcamp to be a good fit. She hopes to develop a simple but addicting video game app with her friends and aspires to be a Web Developer in the near future.
                </p>

                {/* contact links */}
                <div className="contactlinks-container">
                    <a class="contactlinks" title="Send me an email!" href="mailto: khris.soto@live.com"><MdEmail size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a class="contactlinks" target="_blank" rel="noreferrer" title="Connect with me on LinkedIn!"
                        href="https://linkedin.com/"><FaLinkedin size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a class="contactlinks" target="_blank" rel="noreferrer" title="Check out my GitHub!"
                        href="https://github.com/ksoto18"><FaGithub size={"1.5em"} /></a>
                </div>
            </section>

            {/* maggie's about info */}
            <section id="maggie" className="individual-aboutinfo"
                style={{ display: toggle ? 'block' : 'none' }}>

                {/* profile img */}
                <img alt="Maggie" className="profileimg" src="https://avatars.githubusercontent.com/u/112098717?v=4" />

                <h3 className="nametitle">Maggie Lively</h3>

                {/* about paragraph */}
                <p>
                    Maggie Lively recently relocated to Orlando from the Washington D.C. area where
                    she owned a yoga studio. Due to the Covid-19 Pandemic, she spent the last couple
                    of years teaching online learning more about dynamic websites and interactive
                    technology to reach students. Creating and editing videos for her website sparked
                    an interest in web development.<br /><br />
                    Maggie decided to enroll in the UCF Coding Bootcamp to pursue a career in front-end
                    web development. She enjoys creating new websites and applications that are attractive
                    and user-friendly. She looks forward to learning more about web-development throughout
                    the course and beyond.
                </p>

                {/* contact links */}
                <div className="contactlinks-container">
                    <a class="contactlinks" title="Send me an email!" href="mailto: maggie.lively@gmail.com"><MdEmail size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    {/* ADD MAGGIE'S LINKEDIN */}
                    <a class="contactlinks" target="_blank" rel="noreferrer" title="Connect with me on LinkedIn!" href="https://linkedin.com"><FaLinkedin size={"1.5em"} /></a>
                    &nbsp;&nbsp;
                    <a class="contactlinks" target="_blank" rel="noreferrer" title="Check out my GitHub!"
                        href="https://github.com/mmllively"><FaGithub size={"1.5em"} /></a>
                </div>

            </section>

        </div >
    )
}

export default About;