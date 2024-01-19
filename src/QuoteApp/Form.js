import React, { useState } from "react";
import { adddislikes, addlikes,removeItem,insertnewdata } from "./Store/Slices/FetchQuotes";
import { useSelector, useDispatch } from "react-redux";
const Form = ({ onClose }) => {
  const [formdata, setFormdata] = useState({
    author:"",
    quote: "",
  });
  const [Errors,setErrors]=useState({
    author:false,
    quote:false,
  })
  const state=useSelector((state)=>state.quotes)
  const dispatch=useDispatch()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
    // console.log('changed',name)
  };
  const handleFormData = (event) => {
    event.preventDefault();
    if(!formdata.author.trim() || !formdata.quote.trim()){
      setErrors((prevErrors) => ({
        ...prevErrors,
        author: !formdata.author.trim(),
        quote: !formdata.quote.trim(),
      }));
    }else{
      setErrors((prevErrors) => ({
        ...prevErrors,
        author:false,
        quote:false,
      }));
      let time=new Date();
      let currentday=(time.getDate());
      let month=(time.getMonth());
      let currentYear=(time.getFullYear());
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let currentMonth=months[month]
      let data={
        id:state.quotesdata.length+1,
        quote:formdata.quote,
        author:formdata.author,
        likes:0,
        dislikes:0,
        year:currentYear,
        month:currentMonth,
        day:currentday,
      }
      dispatch(insertnewdata(data))
      setFormdata({
        author:'',
        quote:'',
      })

    }
  };
  const EraseFormData = (event) => {
    event.preventDefault();
    setFormdata({
      author: "",
      day: "",
      month: "",
      year: "",
      quote: "",
    });
    // console.log('this fun will erase form data')
  };
  return (
    <div className="bg-white  w-[340px] p-2  fixed right-[3%] top-16 z-10 rounded-sm shadow-lg">
      <div className="py-3 flex flex-col px-2">
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg font-semibold">
            <p>Fill The Below Form</p>
          </div>
          <div  title="close" className="flex justify-center align-center  bg-slate-300 hover:bg-[#cacecf] rounded-sm">
            <button
              className="text-xl  -mt-1.5  text-red-600 font-bold w-5 inline-flex items-center justify-center text-center"
              onClick={() => onClose()}
            >
              {" "}
              x
            </button>
          </div>
        </div>
        <hr className="mb-2"/>
        <form className="flex flex-col gap-2 ">
          <div className="flex flex-col text-sm gap-1.5 ">
            <label htmlFor="author" className="">
              {" "}
              Author Name
            </label>
            <input
              autoComplete="off"
              value={formdata.author}
              onChange={handleChange}
              id="author"
              type="text"
              name="author"
              placeholder="Author Name"
              className="h-8 focus:outline-none border focus:border-black rounded-sm px-1 transition "
            />
           {Errors.author && <p className="text-red-500  text-xs mb-0.5">Please Enter A Valid Author Name</p>}
          </div>
          {/* <div className="flex flex-col text-sm gap-1.5">
            <label htmlFor="day">Day</label>
            <input
              autoComplete="off"
              onChange={handleChange}
              value={formdata.day}
              id="day"
              type="text"
              name="day"
              placeholder="March"
              className="h-8 focus:outline-none border focus:border-black rounded-sm px-1  transition"
            />
          </div>
          <div className="flex flex-col text-sm gap-1.5">
            <label htmlFor="month">Month</label>
            <input
              autoComplete="off"
              value={formdata.month}
              onChange={handleChange}
              id="month"
              type="text"
              name="month"
              placeholder="Enter number Between 1-12"
              className="h-8 focus:outline-none border focus:border-black rounded-sm px-1  transition"
            />
          </div>
          <div className="flex flex-col text-sm gap-1.5">
            <label htmlFor="year">Year</label>
            <input
              autoComplete="off"
              onChange={handleChange}
              value={formdata.year}
              id="year"
              type="text"
              name="year"
              placeholder="2000"
              className="h-8 focus:outline-none border focus:border-black rounded-sm px-1  transition"
            />
          </div> */}
          <div className="flex flex-col text-sm gap-1.5">
            <label htmlFor="quote">Quote</label>
            <textarea
              onChange={handleChange}
              value={formdata.quote}
              id="quote"
              name="quote"
              placeholder="Quote"
              cols={4}
              rows={5}
              className=" focus:outline-none border focus:border-black rounded-sm px-1 py-2 resize-none transition "
            ></textarea>
             {Errors.quote && <p className="text-red-500  text-xs mb-0.5">This Field Should Not be Empty</p>}
          </div>
          <div className="flex gap-2">
            <button
              className="bg-[#a91ce6] hover:bg-[#ba38f2] active:bg-[#9923cc] px-2 py-1 text-white text-sm rounded-sm"
              onClick={handleFormData}
            >
              Add
            </button>
            <button
              className="bg-[#a91ce6] hover:bg-[#ba38f2] active:bg-[#9923cc] px-2 py-1 text-white text-sm rounded-sm"
              onClick={EraseFormData}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

//
