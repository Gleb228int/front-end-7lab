import React from 'react';

function GoodsCard(props) {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "15px", width: "180px", backgroundColor: "#fff", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <img src={props.image} alt={props.name} style={{ width: "100%", height: "130px", objectFit: "cover", borderRadius: "4px" }} />
            <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{props.name}</h3>
            <p style={{ fontWeight: "bold", color: "#068f8f", margin: "0" }}>Cost: {props.price} grn</p>
        </div>
    );
}

export default GoodsCard;