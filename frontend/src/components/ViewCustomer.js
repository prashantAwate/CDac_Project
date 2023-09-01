import React from 'react'
import {useEffect, useState} from "react";

export default function ViewVendor() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/getallcustomers").then(res => res.json()).then(data => setData(data))
    }, []);

 


    return (
        <div  className="container-fluid mt-5 col-8 border bg-white ">
        <h2 className="text-center"><b>Customer Details</b></h2>

            <table className="table table-striped">
                <tr>
                    <th className="text-center">Customer Id</th>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact NO</th>
                    <th className="text-center">Address</th>
                </tr>


                {
                data.map(v => {
                        return (
                            <tr>
                                <td className="text-center">
                                    {
                                    v.id
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.fname
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.lname
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.email
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.contact_no
                                }</td>
                                <td className="text-center">
                                    {
                                    v.login_id.address
                                }</td>             
                            </tr>
                        )
                })
            } </table>


        </div>
    )
}
