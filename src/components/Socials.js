import React, { useEffect, useState } from 'react';
//import { AppContext } from "../context/Context";


function Socials(props) {




    // const filtered = categories.filter(category => {
    //     return category.id === props.name;
    // });

    console.log(JSON.parse(props.name))

    const socials = JSON.parse(props.name);


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',}}>


            {
                socials.fb === true ?
                    <div style={{ padding:'5px'}}>
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                    :

                    <div>

                    </div>

            }


            {
                socials.insta === true ?
                    <div style={{ padding:'5px'}}>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    :

                    <div>

                    </div>


            }


            {
                socials.tiktok === true ?
                    <div style={{ padding:'5px'}}>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                    :

                    <div>

                    </div>


            }

            {
                socials.youtube === true ?
                    <div style={{ padding:'5px'}}>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    :

                    <div>

                    </div>


            }






        </div>
    );
}

export default Socials;