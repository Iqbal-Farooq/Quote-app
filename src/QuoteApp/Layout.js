import React from "react";
import {
  adddislikes,
  addlikes,
  removeItem,
  insertnewdata,
} from "./Store/Slices/FetchQuotes";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../Assets";
const Layout = ({ quote, author, id, likes, dislikes, day, month, year }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col flex-wrap shadow-md bg-[#aaaaaa] p-4 min-w-[350px] flex-1 "
      key={id}
    >
      <div className="  flex items-center justify-between mb-2">
        <div className="flex gap-3 ">
          <div className="!h-10 w-10 rounded-full bg-white flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/6152588/pexels-photo-6152588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="ih"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div className="font-semibold text-sm  ">
            <div>{author}</div>
            <div className="text-[10px]">
              {day} {month} {year}{" "}
            </div>
          </div>
        </div>
        <div
          title="DELETE"
          className="flex justify-center align-center  bg-slate-300 hover:bg-[#cacecf] rounded-sm"
        >
          <button
            className="text-xl  -mt-1.5  text-red-600 font-bold w-5 inline-flex items-center justify-center text-center"
            onClick={() => dispatch(removeItem(id))}
          >
            {" "}
            x
          </button>
        </div>
      </div>
      <div className="text-sm italic font-normal mb-3">{`" ${quote} "`}</div>
      <div className="flex gap-2">
        <button
          className="flex items-center py-0.5 px-3 gap-2 rounded-sm  bg-rgb(0, 114, 236) bg-[#005eec] active:bg-[#0072ec] text-center text-white"
          onClick={() => dispatch(addlikes(id))}
        >
          <Icon
            name="like"
            width={"20px"}
            height={"20px"}
            viewbox={"0 0 24 22"}
            fillColor="#fff"
          />

          {likes}
        </button>
        <button
          className="flex items-center gap-2 px-3 py-0.5 rounded-sm bg-[#3b4752] text-white active:bg-[#596978] "
          onClick={() => dispatch(adddislikes(id))}
        >
          <Icon
            name="dislike"
            className=""
            width={"20px"}
            height={"20px"}
            fillcolor="#fff"
            viewbox={"0 0 24 23"}
            fillColor="#fff"
          />
          {dislikes}{" "}
        </button>
      </div>
    </div>
  );
};

export default Layout;
