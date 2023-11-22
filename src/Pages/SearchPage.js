import React, {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../components/MealList";
import Header from "../components/Header";

const SearchPages = () => {
    const [inputMeal, setInputMeal] = useState('')
    const [search, setSearch] = useState([])
    const handleClick = () => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${inputMeal}`)
            .then(({data}) => {
                console.log(data.meals)
                setSearch(data.meals)
            })
    }

    return (
        <div className={'container'}>
            <Header/>
            <input type="text" onChange={(e) => setInputMeal(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
            <MealList meals={search}/>
        </div>
    )



}

export default SearchPages