import React from "react";
import { GrClose } from 'react-icons/gr';

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

    return (
        <div>
            <a className="opennav" onClick={openNav}>&#9776;</a>

            <div className="sidenav" id="sidenav">
                <GrClose onClick={closeNav} className="closenav" />


                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>

        </div>
    );
};
export default SideNav;