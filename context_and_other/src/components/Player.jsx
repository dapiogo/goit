import { useRef } from 'react';

export const Player = () => {
    const media = 'http://media.w3.org/2010/05/sintel/trailer.mp4';
    const videoRef = useRef();

    const handlePlay = () => videoRef.current.play();
    const handleStop = () => videoRef.current.pause();

    console.log('renderuj')

    return (
        <div>
            <video ref={videoRef} src={media} controls autoPlay="autoplay"/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleStop}>Pause</button>
        </div>
    )
    
}