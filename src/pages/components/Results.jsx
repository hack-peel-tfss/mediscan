import React, { useEffect, useState } from "react";

const Results = ({ drugData }) => {
  const [filteredData, setFilteredData] = useState(null);
  const [drugIDdata, setDrugIDdata] = useState(null);

  useEffect(() => {
    let filtered = [];
    let newData = [];
    console.log(drugData);
    for (let i = 0; i < drugData?.length; i++) {
      if (filtered.includes(drugData[i]?.drug_identification_number)) {
        console.log("Skipped");
      } else {
        fetch(
          `https://health-products.canada.ca/api/drug/drugproduct/?din=${drugData[i]?.drug_identification_number}&lang=en&type=json`
        )
          .then((response) => response.json())
          .then((response) => {
            newData.push(response);
            setDrugIDdata((prev) => [...prev, response]);
            console.log(`${response} got added`);
          });
        filtered.push(drugData[i]?.drug_identification_number);
        console.log(`${drugData[i]} was added`);
      }
    }
    console.log(newData);
    setFilteredData(filtered);

    // let newData = [];
    // for (let i = 0; i < filteredData?.length; i++) {
    //   let id = filteredData[i];
    //   // https://health-products.canada.ca/api/drug/drugproduct/?din=&lang=en&type=json

    // }
    // console.log(newData);
    // setDrugIDdata(newData);
  }, [drugData]);

  return (
    <div className="w-5/6 p-5 flex flex flex-wrap bg-red-500">
      {drugIDdata?.map((drug) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{drug?.brand_name}</h2>
            <div className="badge badge-primary badge-outline">
              Class : ${drug?.class_name}
            </div>
            <div className="badge badge-primary badge-outline">
              Drug Code : ${drug?.drug_identification_number}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
