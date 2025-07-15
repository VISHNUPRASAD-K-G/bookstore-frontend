import React, { createContext, useState } from 'react'

// create
export const adminProfileUpdateStatusContext = createContext({})
export const userProfileUpdateStatusContext = createContext({})

function Contextshare({children}) {

    // data to be shared
    const [adminProfileUpdateStatus, setadminProfileUpdateStatus] = useState({})
    const [userProfileUpdateStatus, setuserProfileUpdateStatus] = useState({})
  return (
    <adminProfileUpdateStatusContext.Provider value = {{adminProfileUpdateStatus, setadminProfileUpdateStatus}}>
        <userProfileUpdateStatusContext.Provider value={{userProfileUpdateStatus, setuserProfileUpdateStatus}}>{children}</userProfileUpdateStatusContext.Provider>
    </adminProfileUpdateStatusContext.Provider>
  )
}

export default Contextshare