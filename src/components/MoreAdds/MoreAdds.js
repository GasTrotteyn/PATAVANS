import React from "react";
import classes from "./MoreAdds.module.css";

const MoreAdds = (props) => {
    const accesoriesArray = [
        { item: "SMALL OR MED CRL WINDOW", price: "$874" },
        { item: "PROPANE WATER HEATER", price: "$1,125" },
        { item: "WEBASTO Evo 40 HEATER", price: "$2,125" },
        { item: "KNOBS/LATCHES", price: "$135" },
        { item: "UNDERBED STORAGE*", price: "$850-1,150" },
        { item: "1 CABINET", price: "$855" },
        { item: "1 SHELF", price: "$295" },
        { item: "HARDWOOD TABLE", price: "$995" },
        { item: "FLIP UP COUNTER EXT.", price: "$275" },
        { item: "OVEN & STOVE COMBO", price: "$895" },
        { item: "2 BURNER STOVE", price: "$225" },
        { item: "STANDARD FRIDGE", price: "$1,105" },
        { item: "UPGRADE FRIDGE", price: "$1,280" },
        { item: "PROPANE SYSTEM", price: "$865" },
        { item: "HARDWOOD COUNTERTOP", price: "$3,350" },
        { item: "TILES", price: "$195" },
        { item: "SINK & FAUCET", price: "$495" },
        { item: "WATER PUMP", price: "$185" },
        { item: "WATER TANK*", price: "$425" },
        { item: "OSMOSIS WATER FILTER", price: "$450" },
        { item: "SWIVEL BASE FOR CHAIR", price: "$455" },
        { item: "SIMPLE BED FRAME", price: "$550" },
        { item: "BED EXTENSION", price: "$2,100" },
        { item: "2 BED EXTENSIONS", price: "$3,200" },
        { item: "1 DRAWER", price: "$340" },
        { item: "MATTRESS", price: "$875" },
        { item: "SHOWER SEAT", price: "$1,125" },
        { item: "FULL SHOWER", price: "$1,750" },
        { item: "OUTDOOR SHOWER", price: "$225" },
        { item: "GREY WATER TANK", price: "$840" },
        { item: "PORTA POTTY", price: "$150" },
        { item: "COMPOSTING TOILET", price: "$1,440" },
        { item: "BENCH", price: "$650" },
        { item: "WOODEN SEAT", price: "$275" },
        { item: "AWNING (10 f)", price: "$1,750" },
        { item: "SOUND PROOFING", price: "$300" },
        { item: "PAINT", price: "$450" },
    ];

    const electricalUpgradesArray = [
        { item: "100AH LITHIUM BATTERY", price: "$870" },
        { item: "110V OUTLET", price: "$50" },
        { item: "1000W INVERTER", price: "$375" },
        { item: "2000W INVERTER", price: "$575" },
        { item: "2000W INVERTER SHORE", price: null },
        { item: "POWER CHARGER", price: "$1,025" },
        { item: "WEBOOST CELL BOOSTER", price: "$1,200" },
    ];

    const accesories = accesoriesArray.map((acc) => {
        return (
            <div key={acc.item} className={classes.line}>
                <p>{acc.item}</p>
                <p>{acc.price}</p>
            </div>
        );
    });

    const electricalUpgrades = electricalUpgradesArray.map((acc) => {
        return (
            <div key={acc.item} className={classes.line}>
                <p>{acc.item}</p>
                <p>{acc.price}</p>
            </div>
        );
    });

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{props.title}</h2>
            <h4 className={classes.subtitle}>Accesories</h4>
            <div className={classes.content}>
                {accesories}
                <h4 className={classes.subtitle}>Electrical upgrades</h4>
                {electricalUpgrades}
            </div>
        </div>
    );
};

export default MoreAdds;
