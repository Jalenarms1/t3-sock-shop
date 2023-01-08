import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx/index"
import {MdOutlineInventory} from "react-icons/md/index"
import {TbReportMoney} from "react-icons/tb/index";
import {BsBorderStyle} from "react-icons/bs/index"
import {MdOutlineAccountCircle} from "react-icons/md/index"
import {AiOutlineLogout} from "react-icons/ai/index"

import { useState } from "react";

export default function NavBar() {

    const [showOpt, setShowOpt] = useState<boolean>(false)

  return (
    <nav className="h-fit bg-slate-900 shadow-sm shadow-slate-700  px-5 text-2xl ">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl text-slate-300 font-semibold bg-[#411a1a] shadow-inner shadow-rose-900 px-2 py-1 rounded-md">
              Socks N Bottoms
            </div>
            <RxHamburgerMenu onClick={() => setShowOpt(!showOpt)} className="text-slate-100 active:text-slate-400" />

          </div>
          {showOpt && <div className="flex flex-col gap-2 pb-3">
            <div className="border-b border-slate-800 pb-1 flex justify-between">
              <p className="text-sm w-fit text-slate-200 hover:text-slate-400 active:text-slate-500">Inventory</p>
              <MdOutlineInventory className="text-slate-200 active:text-slate-400" />
            </div>
            <div className="border-b border-slate-800 pb-1 flex justify-between">
              <p className="text-sm text-slate-200 hover:text-slate-400 active:text-slate-500">Sales</p>
              <TbReportMoney className="text-slate-200 active:text-slate-400"/>

            </div>
            <div className="border-b border-slate-800 pb-1 flex justify-between">
              <p className="text-sm text-slate-200 hover:text-slate-400 active:text-slate-500">Orders</p>
              <BsBorderStyle className="text-slate-200 active:text-slate-400" />
            </div>
            <div className="border-b border-slate-800 pb-1 flex justify-between">
              <p className="text-sm text-slate-200 hover:text-slate-400 active:text-slate-500">Account</p>
              <MdOutlineAccountCircle className="text-slate-200 active:text-slate-400" />
            </div>
            <div className="border-b border-slate-800 pb-1 flex justify-between">
              <p className="text-sm text-slate-200 hover:text-slate-400 active:text-slate-500">Logout</p>
              <AiOutlineLogout className="text-slate-200 active:text-slate-400 text-md" />
            </div>
            
          </div>}
        </nav>
  )
}
