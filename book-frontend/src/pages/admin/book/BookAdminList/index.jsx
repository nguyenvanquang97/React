import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "../../../../app/services/bookService";

function BookAdminList() {
  const { books } = useSelector((state) => state.books);
  const { isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteBook = (id) => {
    const isConfirm = window.confirm("Bạn có muốn xóa không?");
    if (isConfirm) {
      deleteBook(id)
        .unwrap()
        .then(() => alert("Xóa thành công"))
        .catch((err) => console.log(err));
    }
  };

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="course-list mt-4 mb-4">
      <div className="container">
        <div className="mb-4">
          <Link
            to={"/admin/books/create"}
            className="btn-custom btn-create-course"
          >
            <button className="btn btn-success">
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              Tạo bài viết
            </button>
          </Link>
        </div>

        <div className="course-list-inner p-2">
          <table className="table course-table book-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Thể loại</th>
                <th>Tác giả</th>
                <th>Số trang</th>
                <th>Giá tiền</th>
                <th>Năm xuất bản</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index+1}</td>
                  <td>
                    <Link to={`/admin/books/${book.id}`}>{book.title}</Link>
                  </td>
                  <td>{book?.categories?.map((c) => c.name).join(", ")}</td>
                  <td>{book?.authors?.map((a) => a.name).join(", ")}</td>
                  <td>{book.pageNumbers}</td>
                  <td>{book.price.toLocaleString("en")}đ</td>
                  <td>{book.publishingYear}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookAdminList;
