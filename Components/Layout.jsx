import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  const [active, setActive] = useState(false);
  return (
    <>
        <Navbar active={active} setActive={setActive}/>
        <Sidebar active={active} setActive={setActive}/>
        {children}
    </>
  )
}

export default Layout