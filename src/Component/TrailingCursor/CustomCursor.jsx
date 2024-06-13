import React,{useEffect} from 'react';
import Styles from './CustomCursor.module.css'
import { PiCursorFill } from "react-icons/pi";

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const scrollLeft = window.pageXOffset;
        const scrollTop = window.pageYOffset;
        setCursorPosition({ x: event.clientX + scrollLeft, y: event.clientY + scrollTop });
        createtrailing(event.clientX+40, event.clientY+40);
    };

    const createtrailing = (x, y) => {
        const trailingContainer = document.createElement('div');
        let scrollLeft = window.pageXOffset;
        let scrollTop = window.pageYOffset;
        trailingContainer.className = 'trailing-container';

        for (let i = 0; i<2; i++) {
            const trailing = document.createElement('div');
            trailing.className = Styles['trailing'];
            let relativeX = x + scrollLeft + Math.random() * 20 - 10; // Randomize position within a range
            let relativeY = y + scrollTop + Math.random() * 20 - 10; // Randomize position within a range
            trailing.style.left = `${relativeX - 5}px`;
            trailing.style.top = `${relativeY - 5}px`;
            trailingContainer.appendChild(trailing);
        }

        document.body.appendChild(trailingContainer);

        // Remove the trailing elements after the animation ends
        setTimeout(() => {
            trailingContainer.remove();
        }, 400);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });

    return (
        <div>
            <div className={Styles["cursor-container"]} style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, position: 'absolute' }}>
                {/* <img src={<PiCursorFill />} alt="custom cursor" className={Styles["custom-cursor"]}/> */}
                <PiCursorFill className={Styles["custom-cursor"]}/>
            </div>
        </div>
    );
};

export default CustomCursor;
