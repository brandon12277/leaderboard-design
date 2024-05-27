
import { useEffect, useState } from 'react';
import './App.css';

import TopLeader from './topLeader'; // Make sure the path is correct
import Row from './Row';



function App() {

  const [stocks,setStocks] = useState(null)

  const data = [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      calmarRatio: 0.45,
      overallProfit: 50000,
      avgDailyProfit: 200,
      winPercentage: 60,
      price: 175
    },
    {
      name: "Microsoft Corp.",
      symbol: "MSFT",
      calmarRatio: 0.55,
      overallProfit: 40000,
      avgDailyProfit: 180,
      winPercentage: 65,
      price: 315
    },
    {
      name: "Amazon.com Inc.",
      symbol: "AMZN",
      calmarRatio: 0.35,
      overallProfit: 30000,
      avgDailyProfit: 150,
      winPercentage: 55,
      price: 3200
    },
    {
      name: "Alphabet Inc.",
      symbol: "GOOGL",
      calmarRatio: 0.60,
      overallProfit: 45000,
      avgDailyProfit: 210,
      winPercentage: 70,
      price: 2450
    },
    {
      name: "Tesla Inc.",
      symbol: "TSLA",
      calmarRatio: 0.25,
      overallProfit: 25000,
      avgDailyProfit: 120,
      winPercentage: 50,
      price: 750
    },
    {
      name: "Facebook Inc.",
      symbol: "FB",
      calmarRatio: 0.50,
      overallProfit: 35000,
      avgDailyProfit: 160,
      winPercentage: 62,
      price: 350
    },
    {
      name: "NVIDIA Corp.",
      symbol: "NVDA",
      calmarRatio: 0.40,
      overallProfit: 38000,
      avgDailyProfit: 170,
      winPercentage: 60,
      price: 650
    },
    {
      name: "Netflix Inc.",
      symbol: "NFLX",
      calmarRatio: 0.30,
      overallProfit: 27000,
      avgDailyProfit: 140,
      winPercentage: 55,
      price: 550
    },
    {
      name: "Adobe Inc.",
      symbol: "ADBE",
      calmarRatio: 0.48,
      overallProfit: 33000,
      avgDailyProfit: 150,
      winPercentage: 63,
      price: 500
    },
    {
      name: "Salesforce.com Inc.",
      symbol: "CRM",
      calmarRatio: 0.42,
      overallProfit: 29000,
      avgDailyProfit: 130,
      winPercentage: 58,
      price: 240
    }
  ];
  useEffect(()=>{

    const value = data.map((stock,ind)=>(
      <>
      <tr ><br></br></tr>

      <Row
      
      row={ind}
      name={stock.name}
      calmarRatio={stock.calmarRatio}
      overallProfit={stock.overallProfit}
      avgDailyProfit={stock.avgDailyProfit}
      winPercentage={stock.winPercentage}
      price={stock.winPercentage}
 
       
      />
      </>
  
   ))
 
   setStocks(value)

  },[])

 
  

   
  
   
  return (
    <div className="w-full p-10 mt-5  flex flex-col justify-center items-center">


        <div className="w-full  flex flex-col  items-center">
               
              <h1 className='text-left  text-4xl sm:h1 font-bold mb-12 text-gray-900 text-shadow-lg head-text raleway'>  Leader Board</h1> 
              <div className='flex gap-5 mt-10 mb-10 font-poppins'>



              <TopLeader name="Apple Inc." ratio="0.45" position="Highest Profit"/>
              <TopLeader name="Microsoft Corp." ratio="0.55" position="#2"/>
              <TopLeader name="Amazon.com Inc." ratio="0.35" position="#3"/>
              <TopLeader name="Alphabet Inc." ratio="0.6" position="#4"/>

              </div> 





              <table className='w-full table-auto  '>
              <thead>
                <tr className='text-gray-700 '>
                 

                <th className='p-6 font-thin font-roboto' >Rank</th>
                <th className='p-6 font-thin'>Name</th>
                <th className='p-6 font-thin'>Calmar Ratio</th>
                <th className='p-6 font-thin'>Overall Profit</th>
                <th className='p-6 font-thin'>Avg. Daily profit</th>
                <th className='p-6 font-thin'>Win %(Day)</th>
                <th className='p-6 font-thin'>Price</th>
                <th className='p-6 font-thin'>Action</th>

                </tr>
                </thead>

                {
                  stocks?
                  <tbody>
                  {stocks}
                  </tbody>
                  :
                  <></>
                }

               
                 
                 
    
                 


              </table>
             
  
        </div>
        
    </div>
  );
}

export default App;
