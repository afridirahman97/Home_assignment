import React, { useEffect, useState } from 'react';
import axios from "axios";


function Category(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://afridirahman97.github.io/api/categories.json',

        })
            .then(res => {
                //console.log(res.data.categories)
                setCategories(res.data.categories)
            })

            .catch(err => {
                // console.log(err)
            })
    }, [])

    const filtered = categories.filter(category => {
        return category.id === props.name;
    });


    return (
        <div>

            {filtered.map(category => {
                return (
                    <div key={category.id}>
                        <p>{category.name}</p>


                        <hr />
                    </div>
                );
            })}


        </div>
    );
}

export default Category;