import React, { useState } from "react";
import "../App.css";
import TextInput from "../elements/TextInput";

function Square(props) {
    return (
        <div className="cards">
            <div>

                <h2>{props.nama}</h2>
                <h2>{props.nim}</h2>
                <p>{props.email}</p>
            </div>

        </div>
    );
}

export default function ListUser() {
    const [searchTerm, setSearchTerm] = useState("");

    const cardsData = [
        {
            nim: "21120120140065",
            nama: "Arif Zulham Bagaskara",
            email: "Bagas.j500@gmail.com",

        },
        {
            nim: "21120120120030",
            nama: "Rina Santika",
            email: "sanrin5111@gmail.com",

        },
        {
            nim: "21120120140099",
            nama: "Aulya Thareeq Pravantawidya",
            email: "aulyathareeq@gmail.com",

        },
        {
            nim: "21120120120025",
            nama: "Fadilah Hamdi Wanadi",
            email: "Hamdi11adi@gmail.com",

        },
    ];


    const filteredCards = cardsData.filter((card) =>
        card.email.toLowerCase().includes(searchTerm.toLowerCase()) || card.nama.toLowerCase().includes(searchTerm.toLowerCase()) || card.nim.includes(searchTerm)
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="User-cards">

            <div className="User-info">
                {filteredCards.map((card, index) => (
                    <Square
                        key={index}
                        nim={card.nim}
                        nama={card.nama}
                        email={card.email}
                    />
                ))}
            </div>

            <form action="" >
                <TextInput
                    border="yellow"
                    placeholder="Nama"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    );
}