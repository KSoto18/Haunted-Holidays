import React from "react";
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbMessage2Share } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { GiTombstone, GiSpookyHouse } from "react-icons/gi";
import { FiGithub } from 'react-icons/fi';
import { MdOutlineForum } from 'react-icons/md';
import Switch from '@mui/material/Switch';
import logo from './../../assets/img/boo-blanco.gif'
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
                    <a className="navlink" href="/forum">
                        <MdOutlineForum /> Forum </a>
                    <a className="navlink" href="/hauntedlocations">
                        <GiSpookyHouse /> Haunted &nbsp;&nbsp;&nbsp;&nbsp;Locations</a>
                    <a className="navlink" href="/contact">
                        <TbMessage2Share /> Contact</a>
                    <a className="navlink" href="/about">
                        <HiUserGroup /> About Us</a>

                    {/* dark mode button */}
                    <div className='dark-mode-container'>
                        <p>Enable Dark Mode?</p><br />
                        <Switch onClick={darkMode} className='darkmode-btn'> Dark mode</Switch>
                    </div>

                </div>
                <img className="ghost" src={logo} alt="Logo" />
            </div>
           
        </div >

    );
};
export default SideNav;