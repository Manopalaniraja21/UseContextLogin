import React, { useContext } from 'react'
import UserProvider from '../Context/UserProvider'
import UserContext from '../Context/UserContext'

const DashBoard = () => {
    const { user } = useContext(UserContext)
    return (
        <div>{user.username}</div>
    )
}

export default DashBoard