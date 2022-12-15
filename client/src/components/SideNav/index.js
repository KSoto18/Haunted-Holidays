import React from "react";
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbMessage2Share } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { GiTombstone, GiSpookyHouse } from "react-icons/gi";
import { FiGithub } from 'react-icons/fi';

const SideNav = (props) => {

    const openNav = () => {
        document.getElementById("sidenav").style.width = "225px";
        // document.getElementById("body-closenav").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    const closeNav = () => {
        document.getElementById("sidenav").style.width = "0";
        // document.getElementById("body-closenav").style.marginLeft = "0";
        // document.body.style.backgroundColor = "white";
    }

    const darkMode = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
        <div>

            {/* button to open sidenav */}
            <a className="opennav" onClick={openNav}>
                <GiTombstone size={'2em'} />
                <p className="nav-title">Navigation</p>
            </a>

            <div className="sidenav" id="sidenav">
                {/* button to close sidenav */}
                <AiOutlineClose onClick={closeNav} className="closenav" />

                <div className="nav-menu-items">
                    {/* navigation menu */}
                    <a className="navlink" href="/">
                        <AiOutlineHome /> Home</a>
                    <a className="navlink" href="/profile">
                        <CgProfile /> Profile</a>
                    <a className="navlink" href="/hauntedlocations">
                        <GiSpookyHouse /> View Haunted &nbsp;&nbsp;&nbsp;&nbsp;Locations</a>
                    <a className="navlink" href="/contact">
                        <TbMessage2Share /> Contact</a>
                    <a className="navlink" href="/about">
                        <HiUserGroup /> About Us</a>
                    <a className="navlink" href="/forum">
                         Forum </a>
                    <a className="navlink" target="_blank"
                        rel="noreferrer"
                        href="https://github.com/KSoto18/Haunted-Holidays">
                        <FiGithub /> Repository</a>

                    {/* dark mode button */}
                    <button onClick={darkMode} className='darkmode-btn'>Enable dark mode</button>

                </div>

            </div>

        </div >

    );
};
export default SideNav;