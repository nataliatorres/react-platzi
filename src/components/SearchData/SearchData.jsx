import { useState, useEffect } from "react";

const SearchData = () => {
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
                if (!response.ok) {
                    throw new Error("Error fetching the data")
                }
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchData();
    }, [query])

    if (isLoading)  {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <p>There's been an error: {error}</p>;
    }

    return (
        <div className="w-[100%] border-solid border-white-300 border-1 rounded-xl my-[50px] py-[10px]">
            <h1>Look for a post</h1>
            <div className="flex justify-center flex-wrap gap-[20px] my-[10px]">
                <input className="border-solid border-white-300 border-1 rounded-lg my-[10px] px-[5px]"
                    type="text"
                    placeholder="Search by title"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    // Only do the fetch when Enter is pressed
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setQuery(input);
                        }
                    }}
                />
                <button onClick={() => setQuery(input)}>Search</button>
            </div>
            {
                posts.map((post) => (
                    <p key={post.id} id={post.id}>{post.title}</p>
                ))
            }
            <p className="text-xs my-[10px]">I'm using <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
        </div>
    )
}

export default SearchData;