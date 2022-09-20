import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const FilterModal = ({ handleModalClose }) => {
  const { themeMode } = useContext(AppContext);

  return (
    <div
      className={`max-w-sm ml-auto sm:mr-20 md:mr-24 lg:mr-32 
     p-6 relative top-72 md:top-48 ${themeMode ? "bg-component-white-bg" : "bg-component-dark-bg"
        }`}
    >
      <form className={`${themeMode ? "text-light-dark-font" : "text-white"}`}>
        <header className="text-lg font-semibold pb-3">Filter Options</header>
        <p style={{ fontFamily: 'Sen', fontSize: '14px', paddingBottom: '10px' }} >Influencer's Category</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${themeMode
            ? "bg-white text-light-dark-font"
            : "bg-black text-gray-font"
            }`}
        >
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh" selected>
            Select Options
          </option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Food</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Model</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Fashion</option>
        </select>
        <p style={{ fontFamily: 'Sen', fontSize: '14px', padding: '10px 0px 10px 0px' }}>Influencer's Country</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${themeMode
            ? "bg-white text-light-dark-font"
            : "bg-black text-gray-font"
            }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Bangladesh</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">India</option>
        </select>
        <p style={{ fontFamily: 'Sen', fontSize: '14px', padding: '10px 0px 10px 0px' }}>Audience's Country</p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${themeMode
            ? "bg-white text-light-dark-font"
            : "bg-black text-gray-font"
            }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Bangladesh</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">India</option>
        </select>
        <p style={{ fontFamily: 'Sen', fontSize: '14px', padding: '10px 0px 10px 0px' }}>
          Influencer's Social Media Platform
        </p>
        <select
          name="industry"
          id="industry"
          className={`w-full py-3 px-2 outline-none rounded ${themeMode
            ? "bg-white text-light-dark-font"
            : "bg-black text-gray-font"
            }`}
        >
          <option value="Bangladesh" selected>
            Select Options
          </option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Facebook</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">Instgram</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">LinkedIn</option>
          <option style={{ fontFamily: 'Sen', fontSize: '14px' }} value="Bangladesh">TikTok</option>
        </select>


        <div class="flex flex-col space-y-2 p-2 w-80">
          <label style={{ fontFamily: 'Sen', fontSize: '14px', padding: '10px 0px 5px 0px' }}>Influencer's Social Media Platform</label>
          <input type="range" class="w-full" min="1" max="6" step="1" />
          <ul class="flex justify-between w-full px-[10px]">
            <li class="relative flex justify-center"><span class="absolute">1K</span></li>
            <li class="relative flex justify-center"><span class="absolute">25k</span></li>
            <li class="relative flex justify-center"><span class="absolute">50K</span></li>
            <li class="relative flex justify-center"><span class="absolute">100K</span></li>
            <li class="relative flex justify-center"><span class="absolute">250K</span></li>
            <li class="relative flex justify-center"><span class="absolute">500K</span></li>
            <li class="relative flex justify-center"><span class="absolute">1000K</span></li>
          </ul>
        </div>


        <p style={{ fontFamily: 'Sen', fontSize: '14px', padding: '30px 0px 5px 0px' }}>Influencer's Gender</p>
        <div className="w-3/5 flex items-center justify-around">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            className="w-5 h-5"
          />
          <label style={{ fontFamily: 'Sen', fontSize: '14px' }} for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            className="w-5 h-5"
          />
          <label style={{ fontFamily: 'Sen', fontSize: '14px' }} for="female">Female</label>
        </div>

        <div className="w-full flex justify-end gap-3 py-4">
          <button
            onClick={handleModalClose}
            className={`${themeMode ? "bg-white" : "bg-black"
              } text-gray-font p-3 rounded-md`}
          >
            Reset
          </button>
          <button
            onClick={handleModalClose}
            className="bg-btn-color text-white p-3 rounded-md"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;
