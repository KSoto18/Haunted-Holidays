import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbMessage2Share } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { GiTombstone, GiSpookyHouse } from "react-icons/gi";
// import { FiGithub } from 'react-icons/fi';
import { MdOutlineForum } from 'react-icons/md';
import Switch from '@mui/material/Switch';
import logo from './../../assets/img/boo-blanco.gif'

const SideNav = (props) => {

    const [show, setShow] = useState(false)



    const darkMode = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
        <div >
            {/* button to open sidenav */}
            <a className="opennav" onClick={() => {
                setShow(true)
                props.sideNav(true)
            }}>
                <GiTombstone size={'2em'} />
                <p className="nav-title">Navigation</p>
            </a>

            <div className="sidenav" id="sidenav" style={show ? { width: '250px' } : { width: '0px' }}>
                {/* button to close sidenav */}
                <AiOutlineClose onClick={() => {
                    setShow(false)
                    props.sideNav(false)
                }} className="closenav" />

                <div className="nav-menu-items">
                    {/* navigation menu */}
                    <Link className="navlink" to="/"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <AiOutlineHome /> Home</Link>
                    <Link className="navlink" to="/profile"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <CgProfile /> Profile</Link>
                    <Link className="navlink" to="/forum"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <MdOutlineForum /> Forum </Link>
                    <Link className="navlink" to="/hauntedlocations"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <GiSpookyHouse /> Haunted <br />
                        <span style={{ marginLeft: '25px', fontSize: '22px' }}>Locations</span></Link>
                    <Link className="navlink" to="/contact"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <TbMessage2Share /> Contact</Link>
                    <Link className="navlink" to="/about"
                        onClick={() => {
                            setShow(false)
                            props.sideNav(false)
                        }}>
                        <HiUserGroup /> About Us</Link>

                    <img className="ghost" src={logo} alt="Logo" />

                    {/* dark mode button */}
                    <div className='dark-mode-container'>
                        <p>Enable Dark Mode?</p><br />
                        <Switch onClick={darkMode} className='darkmode-btn'> Dark mode</Switch>
                    </div>

                </div>

            </div>

        </div >

    );
};
export default SideNav;