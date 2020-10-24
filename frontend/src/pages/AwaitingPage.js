import React from 'react';
import AdminMenu from '../components/AdminMenu.js';
import { useData } from "../data/useData";

function AwaitingPage() {
    const { data } = useData();
    return (
        <div>
            <AdminMenu />
            <div className="admin-table">
                <table>
                    <tr>
                        <td> Request ID </td>
                        <td> User ID</td>
                        <td> Email</td>
                        <td> Request Time </td>
                        <td> Status</td>
                        <td> &nbsp;</td>
                    </tr>
                    {
                        data["requests"].map((request) =>
                            (request.status === false && <tr>
                                <td> {request._id} </td>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>{request.request_time} </td>
                                <td>pending</td>
                                <td><button className="button-validate">Validate</button></td>
                            </tr>)

                        )
                    }

                </table>
            </div>
        </div>

    );
}

export default AwaitingPage