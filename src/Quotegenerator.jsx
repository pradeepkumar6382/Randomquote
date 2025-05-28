import axios from "axios";
import { useEffect, useState } from "react";
import Quoteicon from './quoteicon.png';

const Quotepage = () => {
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    try {
      const res = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'Z32q1L6l706Oz7KGvrqGsw==eINulnWauZ17gTGF'
        }
      });
      setQuote(res.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center p-4 text-center h-screen bg-no-repeat bg-cover bg-[url(https://img.freepik.com/premium-vector/bright-vibrant-color-sunset-mountain-forest-river-with-dawn-deep-valley-landscape_288411-2117.jpg?semt=ais_hybrid&w=740)]">
      {quote.length > 0 ? (
        <div className="relative flex flex-col gap-4 items-center justify-center w-[380px] max-w-full p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.2)] text-white transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
        <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-40 z-0 animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
        <img className="w-32 animate-pulse" src={Quoteicon} alt="Quote Icon" />
        <p className="text-lg md:text-xl font-semibold italic text-center">"{quote[0].quote}"</p>
        <p className="mt-2 text-sm font-medium">— {quote[0].author}</p>

        <button
          className="mt-4 relative inline-flex items-center justify-center px-6 py-2 font-semibold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg group hover:from-pink-500 hover:to-yellow-500"
          onClick={fetchQuote}
        >
      <span className="relative z-10">NEXT</span>
    </button>
  </div>
</div>
      ) : (
        <button className="w-32 shadow-xl  rounded-xl text-black text-xl border-2 border-red-200 bg-red-200 font-semibold ">Loading...</button>
      )}
    </div>
  );
};

export default Quotepage;
