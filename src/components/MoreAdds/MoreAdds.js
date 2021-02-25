import React from "react";
import classes from "./MoreAdds.module.css";

const MoreAdds = (props) => {
    const accesoriesArray = [
        { item: "Window", price: "$849" },
        { item: "Propane Water Heater", price: "$849" },
        { item: "Webasto Space Heater", price: "$849" },
        { item: "Knob/Latches", price: "$849" },
        { item: "Underbed Storage*", price: "$849" },
        { item: "1 Cabinet", price: "$849" },
        { item: "1 Shelf", price: "$849" },
        { item: "1 Table", price: "$849" },
        { item: "Flip Up Counter Ext.", price: "$849" },
        { item: "Oven & Stove combo", price: "$849" },
        { item: "2 Burner Stove", price: "$849" },
        { item: "Fridge", price: "$849" },
        { item: "Propane System", price: "$849" },
        { item: "Hardwood countertop", price: "$849" },
        { item: "Tiles", price: "$849" },
        { item: "Sink & Faucet", price: "$849" },
        { item: "Water Pump", price: "$849" },
        { item: "Water Tank*", price: "$849" },
        { item: "Ro Water Filter", price: "$849" },
        { item: "Swivel base for chair", price: "$849" },
        { item: "Simple Bed Frame", price: "$849" },
        { item: "Bed Extension", price: "$849" },
        { item: "Drawer", price: "$849" },
        { item: "Mattress", price: "$849" },
        { item: "Shower seat", price: "$849" },
        { item: "Gray Water Tank", price: "$849" },
        { item: "Porta Potty", price: "$849" },
        { item: "Composting toilet", price: "$849" },
        { item: "Bench", price: "$849" },
        { item: "Wooden Seat", price: "$849" },
        { item: "Awning (small)", price: "$849" },
        { item: "Awning (large)", price: "$849" },
    ];

    const electricalUpgradesArray = [
        { item: "160W Solar Panel", price: "$849" },
        { item: "100AH Lithium battery", price: "$849" },
        { item: "110V Outlet", price: "$849" },
        { item: "1000W Inverter", price: "$849" },
        { item: "2000W Inverter", price: "$849" },
        { item: "Shore Power (inverter & charger)", price: "$849" },
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
