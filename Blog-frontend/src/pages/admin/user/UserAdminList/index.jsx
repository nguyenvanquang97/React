import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDeleteUserMutation, useGetUsersQuery } from '../../../../app/services/userService';

function UserAdminList() {
  const {users} = useSelector((state) => state.users);
  const [deleteUser]=useDeleteUserMutation();
  const { isLoading } = useGetUsersQuery();
  if ( isLoading ) {
      return <h2>Loading...</h2>
  }
  const handleDelete = (id) => {
    const isDelete = window.confirm("Bạn có muốn xóa không?")
    if(isDelete) {
        deleteUser(id);
    }
}


  return (
    <div className="course-list mt-4 mb-4">
            <div className="container">
                <div className="mb-4">
                    <Link
                        to={"/admin/users/create"}
                        className="btn-custom btn-create-course"
                    >
                        <span>
                            <i className="fa-solid fa-plus"></i>
                        </span>
                        Tạo User
                    </Link>
                </div>

                <div className="course-list-inner p-2">
                    <table className="table course-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Roles</th>
                               
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        {user.roles
                                            .map((c) => c)
                                            .join(", ")}
                                    </td>
                                    <td>
                                        <Link to={`/admin/users/${user.id}`} className='btn btn-info'>Edit</Link>
                                        <button className='btn btn-danger'
                                                onClick={() => handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default UserAdminList