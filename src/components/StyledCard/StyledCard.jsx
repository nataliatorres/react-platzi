//import "./styles.css"
//import styles from "./StyledCard.module.css"
import styles from "./StyledCard.module.scss"

const StyledCard = () => {

    return (
        /*<div className="card">*/
        /*<div className={styles.card}>*/
        <div className={styles["milk-card-container"]}>
            <section className={styles["title"]}>
                <h1>MILK</h1>
                <figure>
                    <img src="/images/cow-icon.svg"/>
                </figure>
            </section>
            
            <section className={styles["milk-initial-facts"]}>
                <div className={styles["column-one"]}>
                    <h2>94.2 Million in the US</h2>
                    <p> 30 million cows in Australia</p>
                </div>
                <div className={styles["column-two"]}>
                    <p>Drink 29 gallons per day</p>
                    <p>Produce milk for 305 days</p>
                    <p>200lbs grain food per day</p>
                </div>
            </section>
            <section className={styles["milk-transport"]}>
                <div className={styles["transport-one"]}>
                    <p>Drivers are accredited milk graders</p>
                    <p>Reject based on sight, smell and temperature</p>
                </div>
                <div className={styles["transport-two"]}>
                    <p>Samples are taken to test for MILK FAT bacteria count and protein</p>
                </div>
            </section>
            <section className={styles["milk-health"]}>
                <div className={styles["health-one"]}>
                    <h3>H E A L T H R I S K S</h3>
                    <p>Lactose can block iron absorption and links to prostate cancer.</p>
                </div>
                <div className={styles["health-two"]}>
                    <p>Pasteurization involves heating to neutralize bacteria</p>
                    <p>161 degrees Fahrenheit for at least 15 seconds</p>
                </div>
            </section>
        </div>
    )
}

export default StyledCard;