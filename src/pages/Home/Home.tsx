import React from "react";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#a5c0d3] to-[#34546c] flex justify-center h-screen">
        <div className="container grid grid-cols-1 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">HOME</h2>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
