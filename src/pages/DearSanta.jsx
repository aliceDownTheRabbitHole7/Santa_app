import React, { useState } from "react";
import { formData } from "../data/DearSantaData";
import "../styles/DearSanta.css";

function DearSanta() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    letter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onAlter = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formElements = formData.map((element, i) => {
    return (
      <div className="form-map my-3 flex flex-wrap justify-center" key={i}>
        <label htmlFor={element.for} className="form-label mr-2 mb-2">
          {element.text}
        </label>
        <input
          placeholder={element.placeholder}
          name={element.for}
          onChange={onAlter}
          type={element.type}
          id={element.id}
          className="p-1 shadow-lg"
          required
        />
      </div>
    );
  });

  return (
    <div className="form-container w-screen flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-extrabold rounded-xl p-3"
        action="https://formsubmit.co/aleksanderw1116@gmail.com"
        method="POST"
      >
        <div className="map-container flex flex-col justify-center">
          {formElements}
        </div>
        <div className="text-container flex flex-col justify-evenly align-middle">
          <h1 className="dear-header text-4xl mt-5 text-center">Dear Santa...</h1>
          <textarea
            required
            type="text"
            className="mt-5 p-2 shadow-lg"
            placeholder="Write your letter to Santa here..."
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="submit rounded-xl bg-green-900 shadow-lg p-3 cursor-pointer border-none font-extrabold text-white"
        />
      </form>
    </div>
  );
}

export default DearSanta;
