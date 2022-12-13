import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './style';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button>
            <FaArrowCircleUp size={'2.5em'} onClick={scrollToTop} className="backtotop-btn"
                style={{ display: visible ? 'inline' : 'none' }} />
        </button>
    );
}

export default ScrollButton;
