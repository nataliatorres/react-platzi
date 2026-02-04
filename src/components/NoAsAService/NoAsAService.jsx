import { useState, useEffect } from "react";

const NoAsAService = () => {
    //const [reasons, setReason] = useState([]);
    const [reasons, setReason] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("https://naas.isalman.dev/no")
            //fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) {
                throw new Error("Error fetching the data")
            }
            const data = await response.json()
            setReason(data)
            // We don't need these lines anymore
            // .then((response) => response.json())
            // .then((data) => {setReason(data);
            //                 setLoading(false);})
            // .catch((error) => {console.error("Error fetching data: ", error);})
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading)  {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <p>There's been an error: {error}</p>;
    }

    return (
        <div className="w-[100%] border-solid border-white-300 border-1 rounded-xl my-[50px] py-[10px]">
            <h1>Want to say no but don't know how?</h1>
            <h2 className="mt-[10px]">Keep clicking until you find an answer that you like 🫣</h2>
            <button className="my-[15px]" onClick={fetchData}>Give me a reason</button>
            {
                <p className="font-bold">----&gt; {reasons.reason} &lt;----</p>
            }
            <p className="text-sm">I'm using <a href="https://github.com/hotheadhacker/no-as-a-service">no-as-a-service</a></p>
        </div>
    )
}

export default NoAsAService;