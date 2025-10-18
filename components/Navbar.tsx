import { checkUser } from '@/lib/checkUser'
import React from 'react'

const Navbar = () => {

    const user = checkUser()

    console.log(user)

    return (
        <div>Navbar</div>
    )
}

export default Navbar