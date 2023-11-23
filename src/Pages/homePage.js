import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import MealList from "../components/MealList";

const HomePage = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, []);

    return (
        <>
            <Header/>
            <div className={'container'}>
            <h1>Все блюда</h1>
            <MealList meals={meals} />
                <div className={'footer'}>
                    <h3>© 2023 The AidinFood</h3>
                    <h3>Контактный номер +996(704) 40 50 98x`</h3>
                </div>
            </div>
        </>
    )
}

export default HomePage;
