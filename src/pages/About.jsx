import React from "react";

const About = () => {
  return (
    <div class="">
      <div class="py-28 flex justify-center items-center">
        <div class="m-3 text-center">
          <p class="text-5xl">About <span class="font-bold text-yellow-500">MediScan</span></p>
          <p class="text-xl italic">Problem, Solutions, and Inspiration</p>
        </div>
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

      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <h1 class="font-bold text-3xl card-title">The <span class="font-bold text-yellow-600">Purpose</span></h1>
          <p class="">The <span class="font-bold text-yellow-600">Problems</span> We <span class="font-bold text-yellow-600">Solve</span>:</p>
          <ul class="list-disc p-5 mx-11">
            <li><span class="font-bold text-yellow-600">Miscommunication</span> between hospitals and patients for medication</li>
            <li><span class="font-bold text-yellow-600">Accessibility issues</span> with the medication</li>
            <li>Helps hospital and health care workers, to have info on the medications <span class="font-bold text-yellow-600">on the spot</span></li>
            <li>Solves <span class="font-bold text-yellow-600">language difficulties</span> and <span class="font-bold text-yellow-600">communication</span> between patients</li>
          </ul>
          <p><span class="font-bold text-yellow-600">Importance of Medication Labels</span>: Reading the label correctly can help patients make sure they are taking the right amount of the medicine and that it won't negatively react with other medications, foods or drinks.</p>
        </div>
        <figure><img src="https://placeimg.com/800/650/arch" alt="Album"/></figure>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure><img src="https://placeimg.com/800/650/arch" alt="Album"/></figure>
        <div class="card-body">
        <h1 class="font-bold text-3xl card-title">The <span class="font-bold text-yellow-600">Statistics</span></h1>
          <ul class="p-5 mx-11 list-disc">
            <li><p>A study by the Patient Federation Netherlands among <span class="font-bold text-yellow-600">7,800 members</span> showed that a mistake indeed occurred by around <span class="font-bold text-yellow-600">13 percent</span> of hospital patients</p></li>
            <li><p>Approximately <span class="font-bold text-yellow-600">one-third</span> of these patients suffered <span class="font-bold text-yellow-600">temporary</span> or <span class="font-bold text-yellow-600">permanent damages</span> due to the errors &#40;<a class="text-blue-500" href="https://nltimes.nl/2021/10/30/miscommunication-among-hospital-staff-led-medical-mistakes">source</a>&#41;</p></li>
            <li><p>A false diagnosis or distribution of the wrong medication were the most common faults made</p></li>
            <li><p><span class="font-bold text-yellow-600">20% of Canada's population</span> reported speaking a language other than English or French, this will effect them when reading medication labels</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
    
};

export default About;
