import React from 'react';
import ScareSound from '../../assets/mp3/dark-sitar-7546.mp3';

const EnterPg = () => {
    var scareEffect = document.getElementById("");
    function playEffect() {
        scareEffect.play();
    }
    function pauseEffect() {
        scareEffect.pause();
    }

    return (
        <div>

            <audio>
                <source src={ScareSound}></source>
            </audio>

            <button onClick={playEffect()} type="button">
                Enter at your own risk...
            </button>

            <button onClick={pauseEffect()} type="button">
                Make it stop, I'm too scared!
            </button>

        </div>
    )
}

export default EnterPg;