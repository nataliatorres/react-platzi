import { useState, useEffect } from "react";

const NoAsAService = () => {
    //const [reasons, setReason] = useState([]);
    const [reasons, setReason] = useState([]);
    const [locked, setUnlocked] = useState(false);

    const handleClick = () => {
        
    };

    const fetchData = async () => {
        fetch("https://naas.isalman.dev/no")
        //fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setReason(data))
        .catch((error) => console.error("Error fetching data: ", error))
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="w-[100%] border-solid border-red-300 border-1 rounded-xl my-[10px] py-[10px]">
            <h1>Want to say no but don't know how?</h1>
            <h2>Keep clicking until satisfied with an answer 🫣</h2>
            <button onClick={fetchData}>Give me a reason</button>
            {//locked && (
                <p>{reasons.reason}</p>
            //)
            }
        </div>
    )
}

export default NoAsAService;