import React from "react";
import Header from "@/components/Header/page";

const Expert = () => {
  return (
    <div className="bg-black h-screen">
      <Header />

      <div className="w-full flex flex-col items-center">
        <div className="flex gap-6 w-8/12">
          <img
            className="w-[350px] h-[200] rounded-3xl"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="/"
          />

          <div className="text-gray-500 flex flex-col gap-2">
            <h3 className="text-white text-3xl">Riko Roberto</h3>
            <p className="text-gray-300 text-xl">Улоговный кодекс</p>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
