
import React from "react";


const Row = ({row,name,
calmarRatio,
overallProfit,
avgDailyProfit,
winPercentage,
price}) =>{

    return(
        
    <tr className="w-full  ">
                

                 
    <td className=" relative  p-6 font-bold  ">
      <div className=" left sp-br p-6  font-bold  ">
      #{row+1}
      </div>
      
    
    </td>
    <td className=' ele-br p-6 text-center '>
     {name}
    </td>
    <td className=' ele-br p-6 text-center'>
    <i class="fa-solid fa-arrow-trend-up" style={{color: "#63E6BE"}}></i> {calmarRatio}
    </td>
    <td className=' ele-br p-6 text-center'>
      {overallProfit}
    </td>
    <td className='ele-br p-6 text-center'>
      {avgDailyProfit}
    </td>
    <td className='ele-br p-6 text-center'>
    
      {winPercentage}
      
    </td>
    <td className='ele-br p-6 text-center'>
      {price}
    </td>
    <td className=' sp-br-last  relative  p-6 text-center'>
    <div className=" flex gap-5 left  p-6   ">
      <a className="flex items-center justify-center mr-5" href="#"> View</a>
      </div>
    </td>
   
    
  </tr>
 
    )
}

export default Row;