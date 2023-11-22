import React from "react";
import MealsCard from './MealCard'

const MealList = ({meals}) => {
    return(
        <div className={'row'}>
            {
                meals.map(meal =>
                <div
                key={meal.idMeal}
                className={'col-4'}
                >
                    <MealsCard meal={meal}/>
                </div>
                )
            }
        </div>
    );
};

export default MealList