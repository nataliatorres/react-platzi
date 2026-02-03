const StaticComponent = () => {
    const items = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className="w-[100%] bg-white">
            {
                items.map((item, index) => (
                    <a className="pr-[5px]" href="" key={index}>{item}</a>
                ))
            }
        </nav>
    )

}

export default StaticComponent;
