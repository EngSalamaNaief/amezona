import React,{useState} from 'react'
import {useTranslation} from "react-i18next"


export default function Categorybar() {
    const [catename,setCatename]=useState(null);
    const { t,i18n } = useTranslation("categorybar");
      // change topbar style from ltr to rtl
  const stylehandler=()=>{
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
    <div className='bg-zinc-900 text-white py-1.5 px-3' style={stylehandler()}>
        <ul className='list-none flex items-center'>
            <li name="men" onMouseEnter={()=>setCatename("men")} onMouseLeave={()=>setCatename(null)} className='capitalize z-10 px-4 border border-zinc-900 hover:border-white relative'>
                <span className='cursor-pointer'>{t("menCate")}</span>
                <div className={`${catename==="men"?"block":"hidden"}`}>
                    <div className={`absolute flex flex-wrap justify-between w-56 top-6 ${i18n.language==="ar"?"right-0":"left-0"} bg-white text-black border border-zinc-900 p-3`}>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("men.choose")}</div>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("men.tshirt")}</div>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("men.bantalons")}</div>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("men.shirts")}</div>  
                    </div>
                </div>
            </li>
            <li  onMouseEnter={()=>setCatename("woman")} onMouseLeave={()=>setCatename(null)} className='capitalize z-10 px-4 border border-zinc-900 hover:border-white relative'>
                <span className='cursor-pointer'>{t("womenCate")}</span>
                <div className={`${catename==="woman"?"block":"hidden"}`}>
                    <div className={`absolute flex flex-wrap justify-between w-56 top-6 ${i18n.language==="ar"?"right-0":"left-0"} bg-white text-black border border-gray-900 p-3`}>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("women.makeup")}</div>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("women.dresses")}</div>
                        <div className='capitalize cursor-pointer hover:text-gray-900 p-1'>{t("women.skirts")}</div>
                       
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
  )
}
