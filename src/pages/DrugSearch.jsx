import React, { useEffect, useState } from "react";
import Results from "./components/Results";

const DrugSearch = () => {
  const [userInput, setUserInput] = useState(null);
  const [rawData, setRawData] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  // const capitaliseDrug = (e) => {
  //   e.preventDefault();
  //   // let result = userInput.toUpperCase();
  //   setUserInput(userInput);
  //   checkDrug();
  // };

  // const checkUnique = (drug) => {
  //   if (!(drug in filteredData)) {
  //     setFilteredData((current) => [...current, drug]);
  //   }
  // };
  // const filterData = (data) => {
  //   data?.[0]?.[0]?.forEach(checkUnique);
  //   data?.[0]?.[1]?.forEach(checkUnique);
  //   console.log(filteredData);
  // };
  // useEffect(() => {
  //   filterData(rawData);
  // }, [rawData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    checkDrug(userInput);
  };

  // useEffect(() => {
  //   fetch(
  //     `https://health-products.canada.ca/api/drug/drugproduct/?brandname=${userInput}&lang=en&type=json`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setRawData(response))
  //     .then((data) => console.log(data));
  // }, [trigger]);

  const checkDrug = async (drug) => {
    await fetch(
      `https://health-products.canada.ca/api/drug/drugproduct/?brandname=${drug}&lang=en&type=json`
    )
      .then((response) => response.json())
      .then((response) => {
        setRawData(response);
        console.log(response);
        console.log(rawData);
      });
    // .then((data) => console.log(data));
    console.log(rawData);
    // filterData(rawData);
    // Filter for array with same drug name
    // if (rawData != null) {
    //   const filtered = rawData?.filter((drug) => {
    //     return drug?.brand_name.includes(userInput);
    //   });
    //   setFilteredData(filtered);
    //   console.log(filteredData);
    //   console.log(filteredData);
    // }
  };

  return (
    <div className="px-5 w-full py-8">
      <div className="rounded-3xl p-4 bg-secondary-content flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-bold text-primary uppercase">
          Search For A Drug :
        </h1>
        <div className="form-control mb-4 mt-6">
          <div className="input-group">
            <input
              onChange={(e) => setUserInput(e.target.value.toUpperCase())}
              type="text"
              placeholder="e.g. Tylenol Extra Strength"
              className="input input-bordered"
            />
            <button
              className="btn btn-square btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center flex-wrap grid grid-cols-2">
        <Results drugData={rawData} />
      </div>
    </div>
  );
};

export default DrugSearch;
