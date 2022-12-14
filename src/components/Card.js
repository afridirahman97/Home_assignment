import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import Location from "./Location";
import Category from "./Category";
import Socials from "./Socials";

const Card = ({
  name,
  country_id,
  connected_socials,
  gender,
  category,
  followers,
  joiningDate,
  url,
}) => {
  const { themeMode } = useContext(AppContext);

  const socials = JSON.stringify(connected_socials)

  console.log(JSON.parse(socials))

  return (
    <div
      className={` ${themeMode
        ? "bg-component-white-bg hover:shadow-lg"
        : "bg-component-dark-bg card"
        } rounded-lg`}
    >
      <div className="pt-10">
        <img
          src={url}
          className="mx-auto w-24 h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 
                rounded-full"
        />
      </div>

      <div className="text-center py-5 font-medium">
        <h1
          className={`text-xl ${themeMode ? "text-light-dark-font" : "text-white"
            } py-1`}
        >
          {name}
        </h1>


        <div style={{ display: 'flex', flexDirecttion: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <i
            className="fa-solid fa-location-dot px-2 text-lg 
                text-gray-font"
          ></i>

          <Location name={country_id} />
        </div>







        <p className="text-gray-font text-sm font-light">
          <i className="fa-solid fa-clock px-2 text-lg text-gray-font"></i>
          Joined On: {joiningDate}
        </p>
        <div
          className={`flex gap-4 justify-center items-center py-4 
                text-lg ${themeMode ? "text-btn-color" : "text-gray-font"}`}
        >

          <Socials name={socials} />

         
        </div>
        <div
          className="text-xs pt-3 pb-5 flex items-center justify-center 
                gap-3 sm:gap-5"
        >
          <div
            className="text-gray-font p-2 border-[1px] border-dashed 
                border-gray-font rounded-sm"
          >
            <p
              className={`${themeMode ? "text-btn-color" : "text-light-gray-font"
                } font-bold`}
            >
              {followers}
            </p>
            <p>Followers</p>
          </div>
          <div
            className="text-gray-font p-2 border-[1px] border-dashed 
                border-gray-font rounded-sm"
          >
            <p
              className={`${themeMode ? "text-btn-color" : "text-light-gray-font"
                } font-bold`}
            >
              {/* {category} */}

              <Category style={{ textDecoration: 'none' }} name={category} />
            </p>
            <p>Categories</p>
          </div>
          <div
            className="text-gray-font p-2 border-[1px] border-dashed 
                border-gray-font rounded-sm"
          >
            <p
              className={`${themeMode ? "text-btn-color" : "text-light-gray-font"
                } font-bold`}
            >
              {gender}
            </p>
            <p>Gender</p>
          </div>
        </div>
      </div>
    </div>
  );
};






export default Card;
