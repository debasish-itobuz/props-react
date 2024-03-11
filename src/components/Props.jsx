import React from "react";

const Props = ({ content, name, img, btn }) => {
    return (
        <div className="w-[15rem] h-full border border-gray-100 p-1 rounded m-1 pb-4 bg-white ">
            <img src={img} alt="" className="h-[65%] w-full" />
            <div className="flex flex-col justify-center items-center ">
                <p className="text-2xl w-full text-start ps-4 py-1">{name} </p>
                <p className="font-bold w-full text-start ps-4 pb-1 ">{content}</p>
                <button className="w-75 border border-green-300 bg-slate-200 px-4 py-2 rounded-sm text-red-800">{btn}</button>
            </div>

        </div>
    );
};

export default Props;
