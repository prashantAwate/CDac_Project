import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import NavigationBarVendor from "./NavigationBarVender"
export default function VenderHomeComp()
{
    return(
        <div className="">

              <NavigationBarVendor></NavigationBarVendor>
                <Outlet></Outlet>
        </div>
        
        
    )
}