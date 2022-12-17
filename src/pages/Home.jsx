import React from "react";

const Home = () => {
  return (
    <div className="w-5/6 p-3 rounded-2xl my-4 flex items-center justify-center">
      <iframe
        class="w-full aspect-video hover:aspect-square rounded-2xl flex items-center justify-center"
        src="https://www.youtube.com"
      ></iframe>
    </div>
  );
};

export default Home;
