import React, { useState } from "react";
import { Link } from "react-router-dom";

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Hantera förändringar i formulärfälten
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Hantera formulärinlämning
    const handleSubmit = (e) => {
        e.preventDefault();
        // Här kan du lägga till funktionalitet för att skicka formuläret, t.ex. en API-anrop
        console.log("Formulär skickat", formData);
        alert("Tack för ditt meddelande!");
        setFormData({ name: '', email: '', message: '' }); // Rensa formuläret efter skickande
    };

    return (
        <div id="kontakt">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Namn:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">E-post:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Meddelande:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Skicka</button>
            </form>

            {/* Länken tillbaka till startsidan */}
            <Link to="/">Tillbaka till startsidan</Link>
        </div>
    );
};

export default Kontakt;
