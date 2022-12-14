import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TbMessage2Share } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { FiUserPlus } from 'react-icons/fi';

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

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <div>
            {/* button to open sidenav */}
            <a className="opennav" onClick={openNav}>&#9776;</a>

            <div className="sidenav" id="sidenav">
                {/* button to close sidenav */}
                <AiOutlineClose onClick={closeNav} className="closenav" />

                <div className="nav-menu-items">
                    {/* navigation menu */}
                    <a className="navlink" href="/"><AiOutlineHome /> Home</a>
                    <a className="navlink" href="/profile"><CgProfile /> Profile</a>
                    <a className="navlink" href="/contact"><TbMessage2Share /> Contact</a>
                    <a className="navlink" href="/about"><HiUserGroup /> About Us</a>

                    {/* login/signup/logout buttons */}
                    <div className='account-btns'>

                        {Auth.loggedIn() ? (
                            <>
                                <span>Hello, {Auth.getProfile().data.username}!</span>
                                <button className="logout-btn"
                                    style={{ fontSize: '14px' }}
                                    onClick={logout}>
                                    Logout <SlLogout />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="login-btn" to="/login">
                                    Login <SlLogin />
                                </Link>

                                <Link className="signup-btn" to="/signup">
                                    Signup <FiUserPlus />
                                </Link>
                            </>
                        )}

                    </div>

                    {/* dark mode button */}
                    <button onClick={darkMode} className='darkmode-btn'>Enable dark mode</button>
                </div>

            </div>

        </div >
    );
};
export default SideNav;