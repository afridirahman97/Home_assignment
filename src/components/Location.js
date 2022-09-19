import React, { useEffect, useState } from 'react';
import axios from "axios";


function Location(props) {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://afridirahman97.github.io/api/countries.json',

        })
            .then(res => {
                //console.log(res.data)
                setLocations(res.data)
            })

            .catch(err => {
                // console.log(err)
            })
    })

    const filtered = locations.filter(location => {
        return location.id === props.name;
    });


    return (
        <div>

            {filtered.map(location => {
                return (
                    <div key={location.id}>
                        <p>{location.name}</p>


                        <hr />
                    </div>
                );
            })}



        </div>
    );
}

export default Location;