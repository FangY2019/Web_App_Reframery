import React from 'react';
import data from '../data/data.js'
import AdminMenu from '../components/AdminMenu'


function ValidateUserPage(props) {
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
                        <td> Validate Time</td>
                    </tr>
                    {
                        data.requests.map(request =>
                            request.status && <tr>
                                <td> {request._id} </td>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>{request.request_time} </td>
                                <td>{request.validate_time}</td>

                            </tr>

                        )
                    }


                </table>
            </div>
        </div>

    );
}

export default ValidateUserPage