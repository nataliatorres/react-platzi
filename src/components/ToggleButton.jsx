import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <>
        <p>Which country would you like to visit?</p>
        <button onClick={() => setIsActive(isActive => !isActive)}>
            {isActive ? "🇦🇺" : "🇨🇴"}
        </button>
        </>
    )
}

export default ToggleButton;