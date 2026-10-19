import React from 'react'
import { MoveUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
        <div className="p-4">
            <h3 className="mb-15 text-6xl font-bold text-white">Prospective <br/><span>Constomer</span><br/>Segmentation </h3>

            <p className="text-xl font-medium text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        
        <div className="">
            <MoveUpRight size={100} color="#e9ebf1" strokeWidth={1.5} />
        </div>
    </div>
  )
}

export default LeftContent