import { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <input
            type = "text"
            placeholder = "Enter your name"
            value = {name}
            onChange = { (event) => setName(event.target.value) }
            />
            <p>Greetings, {name || "visitor"}</p>
        </div>
    )
}

export default NameForm;