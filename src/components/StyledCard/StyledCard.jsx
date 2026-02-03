//import "./styles.css"
//import styles from "./StyledCard.module.css"
import styles from "./StyledCard.module.scss"

const StyledCard = () => {

    return (
        <div className="grid place-items-center my-5">
            <div className="w-xs md:w-lg bg-white">
                <section className="md:flex bg-[image:linear-gradient(rgba(137,153,117,0.5),rgba(137,153,117,0.5)),url('/images/cows-header.jpg')] bg-no-repeat bg-cover">
                    <h1 className="my-[0] md:text-3xl font-semibold md:font-bold md:my-[0.67em] md:flex md:justify-center md:items-center md:pl-[10px]">MILK</h1>
                    <figure className="flex justify-center m-0">
                        <img className="relative w-[100px]" src="/images/cow-icon.svg"/>
                    </figure>
                </section>

                <section className="grid grid-cols-[1fr_2fr] border-custom-style">
                    <div>
                        <h2 className="text-2xl my-[20px] font-[Barlow] font-extrabold non-italic text-black border-custom-style">94.2 Million in the US</h2>
                        <p className="font-[Barlow] font-normal text-black">30 million cows in Australia</p>
                    </div>
                    <div className="flex flex-col justify-center border-custom-style-last">
                        <p className="my-[1em] font-[Barlow] font-normal non-italic text-black">Drink 29 gallons per day</p>
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Produce milk for 305 days</p>
                        <p className="my-[1em] font-[Barlow] font-normal text-black">200lbs grain food per day</p>
                    </div>
                </section>
                <section className="grid grid-cols-[2fr_1fr] border-custom-style">
                    <div className="flex flex-col pr-5 pl-5">
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Drivers are accredited milk graders</p>
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Reject based on sight, smell and temperature</p>
                    </div>
                    <div className="pr-5 pl-5 border-custom-style-last">
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Samples are taken to test for MILK FAT bacteria count and protein</p>
                    </div>
                </section>
                <section className="grid grid-cols-[2fr_1fr]">
                    <div className="pr-5 pl-5">
                        <h3 className="text-xl my-[20px] font-[Barlow] font-semibold non-italic text-black">H E A L T H R I S K S</h3>
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Lactose can block iron absorption and links to prostate cancer.</p>
                    </div>
                    <div className="pr-5 pl-5 border-custom-style-last">
                        <p className="my-[1em] font-[Barlow] font-normal text-black">Pasteurization involves heating to neutralize bacteria</p>
                        <p className="my-[1em] font-[Barlow] font-normal text-black">161 degrees Fahrenheit for at least 15 seconds</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default StyledCard;