import React, { useEffect, useState } from 'react'
import SummaryApi from '../Common/SummaryApi'
import { toast } from 'react-toastify'
import moment from 'moment'

const TpmData = () => {

const [tpmData, setTpmData] = useState([])

const fetchAllData = async ()=>{

  try {
    const fetchData = await fetch(SummaryApi.AlltpmData.url,{
      method : SummaryApi.AlltpmData.method,
      credentials : 'include'
    });

    const dataResponse = await fetchData.json();
    
    if(dataResponse.success){
      setTpmData(dataResponse.data)
    } else{
      toast.error(dataResponse.message)
    }

  } catch (error) {
    toast.error('An error occurred while fetching the data.');
  }

};

useEffect(()=>{
  fetchAllData();
},[]);

  return (
    <div className='bg-white pb-4 '>
      <table className="w-full userTable" >
        <thead>
          <tr  className="bg-black text-white"> 
            <th className='p-2 text-left'>S. no.</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Email</th>
            <th className='p-2 text-left'>Contact No.</th>
            <th className='p-2 text-left'>Purchased Product</th>
            <th className='p-2 text-left'>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {tpmData.map((data,index)=>(
               <tr className='border-b' key={index}>
               <td className='p-2'> {index + 1} </td>
               <td className='p-2'> {data.name} </td>
               <td className='p-2'> {data.email} </td>
               <td className='p-2'> {data.contact} </td>
               <td className='p-2'> {data.purchasedProduct} </td>
               <td className='p-2'>{moment(data?.createdAt).format('LL')}</td>
             </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  )
}

export default TpmData