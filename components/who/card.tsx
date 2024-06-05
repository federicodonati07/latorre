'use client'
import React, { useRef, useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaRegCopy } from "react-icons/fa";


const Card = ({ title, desc }) => {
  const h1Ref = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = h1Ref.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
    }).catch((err) => {
      console.error("errore", err);
    });
  };

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000); // Durata dell'animazione in millisecondi (2 secondi)
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="relative text-slate-50 p-10 transition-all duration-500 ease-in-out group border border-slate-50 rounded-full hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg">
      <div className="absolute top-0 right-0 flex space-x-2 m-5">
        {copied ? (
          <FaCheck className="text-2xl text-green-500" />
        ) : (
          <FaRegCopy
            onClick={copyToClipboard}
            className="text-2xl cursor-pointer group-hover:text-stone-900"
          />
        )}
        <HiOutlineExternalLink className="text-2xl cursor-pointer group-hover:text-stone-900" />
      </div>
      <h1 className="text-2xl tracking-widest font-extrabold group-hover:text-stone-900">{title}</h1>
      <h1 ref={h1Ref} className="font-bold group-hover:text-stone-900">{desc}</h1>
    </div>
  );
};

export default Card;
