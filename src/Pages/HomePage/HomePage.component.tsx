import { useState } from "react";
const axios = require("axios").default;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
    const [searchField, setSearchField] = useState("");
    const [showResult, setShowResult] = useState(false);

    const handleChange = (e: any) => {
        setSearchField(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=${API_KEY}&units=metric`
            )
            .then((response: any) => {
                // handle success
                console.log(response);
            })
            .catch((error: any) => {
                // handle error
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                City:
                <input type="text" name="city" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default HomePage;
