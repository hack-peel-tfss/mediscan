import React from "react";

const About = () => {
  return (
    <div class="">
      <div class="py-28 flex justify-center items-center">
        <div class="m-3 text-center">
          <p class="text-5xl">
            About <span class="font-bold text-yellow-500">MediScan</span>
          </p>
          <p class="text-xl italic">Problem, Solutions, and Inspiration</p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews_363017847.jpg"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h1 class="font-bold text-3xl card-title">
            What is <span class="text-yellow-500">Pneumonia</span>?
          </h1>
          <ul class="p-5 mx-11 list-disc">
            <li>#1 Most Common Reason for US children to be hospitalized</li>
            <li>
              About 1 million adults in the US seek care in a hospital due to
              pneumonia every year, and 50,000 die from this disease
            </li>
            <li>
              World’s leading cause of death among children under 5 years of
              age, accounting for 16% of all deaths of children under 5 years
              old killing approximately 2,400 children a day in 2015
            </li>
          </ul>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <h1 class="font-bold text-3xl card-title">
            The <span class="font-bold text-yellow-600">Purpose</span>
          </h1>
          <p class="">
            The <span class="font-bold text-yellow-600">Problems</span> We{" "}
            <span class="font-bold text-yellow-600">Solve</span>:
          </p>
          <ul class="list-disc p-5 mx-11">
            <li>
              Accessibility Issues For Scans - MediScan makes it easier for
              pneumonia to be detected, without the hassle of huge scientific
              research.
            </li>
            <li>
              Costly Scans - Here at MediScan, our alternative is free and
              accessible to anyone, cutting down costs for scanning services
              that are expensive
            </li>
            <li>
              Inaccurate Data - MediScan reduces the risk of inaccurate
              conclusions because of the amount of data used to create accurate
              predictions.
              <span class="font-bold text-yellow-600">on the spot</span>
            </li>
          </ul>
          {/* <p>
            <span class="font-bold text-yellow-600">
              Importance of Medication Labels
            </span>
            : Reading the label correctly can help patients make sure they are
            taking the right amount of the medicine and that it won't negatively
            react with other medications, foods or drinks.
          </p> */}
        </div>
        <figure>
          <img
            src="https://pubs.rsna.org/cms/10.1148/rg.2018170048/asset/images/medium/rg.2018170048.fig2a.gif"
            alt="Album"
          />
        </figure>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure>
          <img
            src="https://pubs.rsna.org/cms/10.1148/rg.2018170048/asset/images/medium/rg.2018170048.fig2a.gif"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h1 class="font-bold text-3xl card-title">
            The <span class="font-bold text-yellow-600">Statistics</span>
          </h1>
          <ul class="p-5 mx-11 list-disc">
            <li>
              <p>
                A study by the Patient Federation Netherlands among{" "}
                <span class="font-bold text-yellow-600">7,800 members</span>{" "}
                showed that a mistake indeed occurred by around{" "}
                <span class="font-bold text-yellow-600">13 percent</span> of
                hospital patients
              </p>
            </li>
            <li>
              <p>
                Approximately{" "}
                <span class="font-bold text-yellow-600">one-third</span> of
                these patients suffered{" "}
                <span class="font-bold text-yellow-600">temporary</span> or{" "}
                <span class="font-bold text-yellow-600">permanent damages</span>{" "}
                due to the errors &#40;
                <a
                  class="text-blue-500"
                  href="https://nltimes.nl/2021/10/30/miscommunication-among-hospital-staff-led-medical-mistakes"
                >
                  source
                </a>
                &#41;
              </p>
            </li>
            <li>
              <p>
                A false diagnosis or distribution of the wrong medication were
                the most common faults made
              </p>
            </li>
            <li>
              <p>
                <span class="font-bold text-yellow-600">
                  20% of Canada's population
                </span>{" "}
                reported speaking a language other than English or French, this
                will effect them when reading medication labels
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
