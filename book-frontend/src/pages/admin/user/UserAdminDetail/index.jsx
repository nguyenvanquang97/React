import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../../../app/services/userSevice";
function UserAdminDetail() {
  const { userId } = useParams();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassWord, setNewPassword] = useState("");
  const [user, setUser] = useState(null);
  const [defaultPassword, setDefaultPassword] = useState("");
  const [file, setFile] = useState(null);
  
 const {data}=useGetUserByIdQuery(userId);
 console.log(data)

  const handleSubmit = () => {};
  const handleOnChange = () => {};
  const updateUser = () => {};
  const forgotPassword = () => {};
  const changePassword = () => {};
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                defaultValue={data?.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                disabled
                defaultValue={user?.email}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Avatar</label>
              <div className="avatar-preview mb-3 rounded">
                <img
                  src={user?.avatar ?? "https://via.placeholder.com/150"}
                  alt="avatar"
                  id="avatar-preview"
                  className="rounded"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="avatar" className="btn btn-warning">
                  Đổi avatar
                </label>
                <input
                  onChange={handleOnChange}
                  type="file"
                  id="avatar"
                  className="d-none"
                />
                <button className="btn btn-success" type="submit">
                  Xác nhận
                </button>
              </form>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-change-password"
                >
                  Đổi mật khẩu
                </button>
                <button
                  className="btn btn-warning"
                  id="btn-forgot-password"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-forgot-password"
                  onClick={forgotPassword}
                >
                  Quên mật khẩu
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back">
              <Link className="navbar-brand" to={"/users"}>
                Quay lại
              </Link>
            </button>
            <button
              onClick={updateUser}
              className="btn btn-success"
              id="btn-save"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal-change-password"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Đổi mật khẩu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu cũ</label>
                <input
                  type="text"
                  id="old-password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu mới</label>
                <input
                  type="text"
                  id="new-password"
                  value={newPassWord}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="btn-change-password"
                onClick={changePassword}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal-forgot-password"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Quên mật khẩu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <h5>Mật khẩu mới của bạn là:{defaultPassword}</h5>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-change-password"
              >
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdminDetail;
