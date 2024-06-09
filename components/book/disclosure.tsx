'use client'
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Discl = ({title, desc1, desc2, desc3, desc4, desc5, price1, price2, price3, price4, price5, howmuch}) => {
  const hasPrice4Or5 = price4 !== "" || price5 !== "";
  
  return (
    <div className='w-full pt-5 px-4'>
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex w-full items-center justify-between p-6 bg-gray-800 rounded-t-lg">
                <span className="text-slate-50 text-4xl">{title}</span>
                <span className="text-yellow-400 text-4xl mx-8 tracking-widest">{howmuch}</span>
                <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} size-30 fill-white/60 group-hover:fill-white/50`} />
              </Disclosure.Button>
              <Disclosure.Panel className="p-6 bg-gray-700">
                <table className='table-auto border-collapse border border-gray-400 text-2xl w-full'>
                  <thead>
                    <tr className='border border-gray-400 text-slate-50 bg-gray-600'>
                      <th className="border border-gray-400 p-5">Servizio</th>
                      <th className="border border-gray-400 p-5">Prezzo €</th>
                    </tr>
                  </thead>
                  <tbody className='text-slate-50'>
                    <tr>
                      <td className="border border-gray-400 p-5">{desc1}</td>
                      <td className="text-emerald-400 border border-gray-400 p-5">{price1}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-5">{desc2}</td>
                      <td className="text-emerald-400 border border-gray-400 p-5">{price2}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-5">{desc3}</td>
                      <td className="text-emerald-400 border border-gray-400 p-5">{price3}</td>
                    </tr>
                    {hasPrice4Or5 && (
                      <>
                        <tr>
                          <td className="border border-gray-400 p-5">{desc4}</td>
                          <td className="text-emerald-400 border border-gray-400 p-5">{price4}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-5">{desc5}</td>
                          <td className="text-emerald-400 border border-gray-400 p-5">{price5}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Discl;
