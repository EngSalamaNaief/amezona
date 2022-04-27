import React from 'react'
import { FaSearch,FaAngleDown} from "react-icons/fa";
import { BsCart2,BsGeoAlt} from "react-icons/bs";
import {useTranslation} from "react-i18next"
export default function Topbar() {
  const { t,i18n } = useTranslation("topbar");

  
  //change languagues function
  const langhandler=(e)=>{
     i18n.changeLanguage(e.target.value)
  }
  // change topbar style from ltr to rtl
  const styleandler=()=>{
    if(i18n.language==="ar"){
      return{
        direction: "rtl",
          textAlign: "right"
      }
    }else{
      return{
        direction: "ltr",
          textAlign: "left"
      }
    }
  }
  return (

    <div className='bg-black text-white p-1 '>
         <div className='grid grid-cols-12 px-4' style={styleandler()}>
             <div className='col-span-3 flex justify-around'>
                <div className='px-2 py-1 border hover:border-white border-black cursor-pointer text-3xl font-bold'>{t("amazone")}</div>
                <div className='px-2 py-1 border hover:border-white border-black cursor-pointer'> 
                 <div className="text-sm pl-1">{t("deleverto")}</div>
                 <div className='text-xl font-semibold flex items-center'><span className='text-lg'><BsGeoAlt/></span> <span>{t("country")}</span></div>
                </div>
             </div>
             <div className="col-span-6 flex-grow  flex items-center px-4 m-0">
               <form className="bg-white flex items-center justify-center w-full p-0 m-0 rounded-md overflow-hidden">
                 <div className='border-r cursor-pointer border-gray-500 bg-gray-200 text-gray-600 flex items-center'>
                   
                   <select name="" id="" className='py-4 px-2 cursor-pointer'>
                     <option value="all">{t("all")}</option>
                     <option value="men">{t("men")}</option>
                     <option value="woman">{t("women")}</option>
                     <option value="music">Music</option>
                   </select>
                  </div>
                 <input className='flex-grow focus:outline-none border-0 py-3 px-3 text-black h-full' type="text" placeholder='Search'/>
                 <button type='submit' className='text-gray-100 flex-grow-0 bg-yellow-600 h-full p-4 text-xl font-bold flex justify-center items-center'><FaSearch/></button>
               </form>
             </div>
             <div className="col-span-3 ">
               <div className="flex items-center   justify-around">
                 <div className='bg-black text-white'>
                   <select name="" id="" onChange={langhandler} className='bg-black text-white'>
                     <option  value="en">En</option>
                     <option  value="ar">Ar</option>
                   </select>
                 </div>
                  <div className='px-2 py-1 border hover:border-white border-black cursor-pointer '> 
                    <div className='text-sm'>{t("signin")}</div>
                    <div className='font-semibold'><span>{t("accountsAndLists")}</span></div>
                  </div>
                  <div className='px-2 py-1 border hover:border-white border-black cursor-pointer '> 
                    <div className='text-sm'>{t("return")}</div>
                    <div className='font-semibold'><span>{t("orders")}</span></div>
                  </div>
                  <div className='px-2 py-3.5 border hover:border-white border-black cursor-pointer relative '> 
                   <div className='absolute text-yellow-500 left-4 top-0 text-center '>0</div>
                   <div>
                     <BsCart2 className='text-3xl'/>
                   </div>
                  </div>
               </div>
             </div>
         </div>
    </div>
  )
}
