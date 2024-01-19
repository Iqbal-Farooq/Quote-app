import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchquotes } from "./Store/Slices/FetchQuotes";
import Form from "./Form";
const QuoteApp = () => {
  const [showForm, setShowForm] = useState(false);
  const state = useSelector((state) => state.quotes);
  const dispatch = useDispatch();
  const formstate = () => {
    setShowForm((prev) => !prev);
  };
  useEffect(() => {
    // send network call
    dispatch(fetchquotes());
  }, [dispatch]);

  // if(state.loading){
  //   return <p>Loading...</p>
  // }

  return (
    <div className="bg-[#dddddd] flex justify-start  flex-wrap h-full relative">
      <div className="sm:m-auto md:mx-10 mt-3  p-3  shadow-sm  w-full  ">
        <div className="mb-3 border-b px-2 border-solid  shadow-sm  w-full py-1 flex justify-between gap-3">
          <div className="flex gap-3">
            <div className="!h-6 w-6 rounded-full bg-white flex flex-row justify-center items-center">
              <img
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais"
                alt="ih"
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div>Redux Toolikit Learning</div>
          </div>
          <div 
          title="Open Form"
            className="text-sm leading-[17px] bg-[#aa1ae8] hover:bg-[#b527f2] text-white px-2 py-0.5 text-center font-semibold cursor-pointer"
            onClick={formstate}
          >
            Add Quote
          </div>
        </div>
        <div className="flex sm:justify-start md:justify-between gap-1 flex-wrap ">
          {state?.loading ? (
            <p className="text-center text-3xl font-bold m-auto mt-3">Loading..</p>
          ) : (
            state?.quotesdata?.map((quote) => (
              <Layout
                key={quote.id}
                id={quote.id}
                quote={quote.quote}
                author={quote.author}
                likes={quote.likes}
                dislikes={quote.dislikes}
                month={quote.month}
                year={quote.year}
                day={quote.day}
              />
            ))
          )}
        </div>
      </div>
      {showForm && <Form onClose={formstate} />}
    </div>
  );
};

export default QuoteApp;
