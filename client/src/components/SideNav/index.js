import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbMessage2Share } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { GiTombstone, GiSpookyHouse } from "react-icons/gi";
import { MdOutlineForum } from 'react-icons/md';
import Switch from '@mui/material/Switch';
import logo from './../../assets/img/boo-blanco.gif'
// import ScaryMusic from '../../assets/mp3/darksitar.mp3';
// import ImpactSound from '../../assets/mp3/impactsound.mp3';
// import Whispering from '../../assets/mp3/whispering.mp3';
// import { RxSpeakerLoud } from 'react-icons/rx';
// import { RxSpeakerOff } from 'react-icons/rx';
import { SlLogin, SlLogout } from 'react-icons/sl';
import Auth from '../../utils/auth';
import { FiUserPlus } from 'react-icons/fi';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const SideNav = (props) => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const { loading, data } = useQuery(QUERY_USER);

    const user = data?.user || {};

    const [show, setShow] = useState(false)

    const darkMode = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    // const [sound, setSound] = useState(true)

    // var scareEffect = document.getElementById('scare-sound');
    // const playEffect = () => {
    //     scareEffect.play();
    // }
    // const pauseEffect = () => {
    //     scareEffect.pause();
    // }

    return (
        <div>
            {/* <div> */}
            {/* <audio id='scare-sound'>
                <source src={ScaryMusic} type='audio/mp3'></source>
                </audio>

                <button className='speakers'>
                {sound ? <RxSpeakerLoud style={{ color: 'white' }}
                    onClick={() => {
                        playEffect()
                        setSound(true)
                    }} /> : <RxSpeakerOff style={{ color: 'white' }}
                        onClick={() => {
                            pauseEffect()
                            setSound(false)
                        }} />
                }
                </button> */}
            {/* </div>  */}

            {/* button to open sidenav */}
            <a className="opennav" onClick={() => {
                setShow(true)
                props.sideNav(true)
            }}>
                <button className="nav-btn">
                    <GiTombstone size={'1.4em'} />
                    Navigation
                </button>
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

            <div>
                {Auth.loggedIn() ? (
                    <>
                        <div className="logout-btn-container">
                            <p className='hello-user-msg'>
                                Hello, {user.username}!</p>
                            <Link className="logout-btn"
                                style={{ fontSize: '14px' }}
                                onClick={logout}>
                                Logout <SlLogout />
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='login-signup-btn-container'>
                            <Link className="login-btn" to="/login">
                                Login <SlLogin />
                            </Link>

                            <Link className="signup-btn" to="/signup" >
                                Signup <FiUserPlus />
                            </Link>
                        </div>
                    </>
                )}
            </div>

        </div>

    );
};
export default SideNav;