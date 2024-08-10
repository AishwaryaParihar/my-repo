import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../Common/SummaryApi';

const Details = () => {
  const [allPapers, setAllPapers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.ALlpyPapers.url, {
        method: SummaryApi.ALlpyPapers.method,
        credentials: 'include',
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllPapers(dataResponse.data);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error('An error occurred while fetching the data.');
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h2>Details</h2>
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th className='p-2 text-left'>Sr.</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Email</th>
            <th className='p-2 text-left'>Number</th>
            <th className='p-2 text-left'>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allPapers.map((paper, index) => (
            <tr key={index}>
              <td className='p-2'>{index + 1}</td>
              <td className='p-2'>{paper.name}</td>
              <td className='p-2'>{paper.email}</td>
              <td className='p-2'>{paper.number}</td>
              <td className='p-2'>{new Date(paper.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
