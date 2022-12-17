import React from "react";

const About = () => {
  return (
    <div class="">
      <div class="m-3 text-center min-h-screen">
        <p class="text-5xl">About <span class="font-bold text-yellow-500">MediScan</span></p>
        <p class="text-xl italic">Problem, Solutions, and Inspiration</p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/800/400/arch" alt="Album"/></figure>
        <div class="card-body">
          <h1 class="font-bold text-3xl card-title">What is <span class="text-yellow-500">MediScan</span>?</h1>
          <ul class="p-5 mx-11 list-disc">
            <li><span class="font-bold text-yellow-600">Scans</span> drug prescription labels and return drug information</li>
            <li>Different <span class="font-bold text-yellow-600">language</span> options</li>
            <li><span class="font-bold text-yellow-600">Search</span> drug names and receive drug information</li>
          </ul>
        </div>

      </div>

      <div>
        <h1>MediScan's Purpose</h1>
        <p>The problems we solve:</p>
        <ul>
          <li>Miscommunication between hospitals and patients for medication</li>
          <li>Accessibility issues with the medication</li>
          <li>Helps hospital and health care workers, to be able to have info on the medications on spot</li>
          <li>Solves language difficulties and communication between patients</li>
        </ul>
        <p>Importance of medication labels: Reading the label correctly can help patients make sure they are taking the right amount of the medicine and that it won't negatively react with other medications, foods or drinks.</p>
      </div>
      <div>
        <h1>Stats</h1>
        <p>A study by the Patient Federation Netherlands among 7,800 members showed that a mistake indeed occurred by around 13 percent of hospital patients</p>
        <p>Approximately one-third of these patients suffered temporary or permanent damages due to the errors <a href="https://nltimes.nl/2021/10/30/miscommunication-among-hospital-staff-led-medical-mistakes">source</a></p>
        <p>A false diagnosis or distribution of the wrong medication were the most common faults made</p>
        <p>20.0% of Canada's population reported speaking a language other than English or French, this will effect them when reading medication labels</p>
      </div>
    </div>
  )
    
};

export default About;
