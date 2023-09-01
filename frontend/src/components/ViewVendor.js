import React, {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';

export default function ViewVendor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getallvendor").then(res => res.json()).then(data => setData(data)).catch(error => console.error('Error:', error));
    }, []);

    const onChangeAproveStatus = async (e, v) => {
        e.preventDefault();
        const updatedVendors = data.map(vendor => {
            if (vendor.id === v.id) {
                return {
                    ...vendor,
                    status: !vendor.status
                };
            }
            return vendor;
        });

        try {
            await Promise.all(updatedVendors.map(async vendor => {
                const response = await fetch(process.env.REACT_APP_BASE_URL + '/vendor/approve/' + vendor.id + "/" + !vendor.status, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const responseData = await response.json();
                return {
                    ...vendor,
                    status: !vendor.status
                };
            }));
            setData(updatedVendors);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container-fluid mt-5 col-8 border bg-white ">
            <h2 className="text-center">
                <b>Vendor Details</b>
            </h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">Vendor Id</th>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Contact</th>
                        <th className="text-center">Address</th>
                        <th className="text-center">Shop_name</th>
                        <th className="text-center">Vendor Approve</th>
                    </tr>
                </thead>
                <tbody> {
                    data.map(v => (
                        <tr key={
                            v.login_id
                        }>
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
                                v.login_id.contact
                            }</td>
                            <td className="text-center">
                                {
                                v.login_id.address
                            }</td>
                            <td className="text-center">
                                {
                                v.shop_name
                            }</td>
                            
                            <td className="text-center">
                                <Form.Check type="switch"
                                    id={
                                        `custom-switch-${
                                            v.id
                                        }`
                                    }
                                    checked={
                                        (v.login_id.status === "true" || v.login_id.status === true)
                                    }
                                    onChange={
                                        (e) => onChangeAproveStatus(e, v)
                                    }
                                    className="mt-2"/>
                            </td>
                        </tr>
                    ))
                } </tbody>
            </table>
        </div>
    );
}
