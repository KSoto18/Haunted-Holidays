import React from 'react';
// import ScareSound from '../../assets/mp3/dark-sitar-7546.mp3';

const EnterPg = () => {
    var scareEffect = document.getElementById('scare-sound').autoplay;
    document.getElementById('scare-sound').innerHTML = scareEffect;
    const playEffect = () => {
        scareEffect.play();
    }
    const pauseEffect = () => {
        scareEffect.pause();
    }

    return (
        <div>

            <audio id='scare-sound' controls autoplay>
                <source src={ScareSound} type='audio/mp3'></source>
            </audio>

            <button onClick={playEffect} type="button">
                Enter at your own risk...
            </button>

            <button onClick={pauseEffect} type="button">
                Make it stop, I'm too scared!
            </button>

        </div>
    )
}

export default EnterPg;