import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import moment from 'moment'
import SummaryApi from '../Common/SummaryApi';

const User = () => {
  const [allUser, setAllUsers] = useState([])
  const [openUpdateRole, setOpenUpdateRole] = useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: ""
  })

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.AllUser.url, {
      method: SummaryApi.AllUser.method,
      credentials: 'include'
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      setAllUsers(dataResponse.data)
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }

  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div className='bg-white pb-4'>
      <table className='w-full userTable'>
        <thead>
          <tr className='bg-black text-white'>
            <th className='p-2 text-left'>Sr.</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Email</th>
            <th className='p-2 text-left'>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((el, index) => (
            <tr key={index} className='border-b'>
              <td className='p-2'>{index + 1}</td>
              <td className='p-2'>{el?.name}</td>
              <td className='p-2'>{el?.email}</td>
              <td className='p-2'>{moment(el?.createdAt).format('LL')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User