import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import SimpleMdeReact from "react-simplemde-editor";
import { useGetBooksQuery,useCreateBookMutation } from "../../../../app/services/bookService";
import { useGetCategoriesQuery } from "../../../../app/services/categoryService";

function BookAdminCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price,setPrice]=useState(0);
    const [publishingYear,setPublishingYear]=useState(2000)
    const [pageNumbers,setPageNumbers]=useState(100)
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(false);
    const [categoryIds, setCategoryIds] = useState([]);
    const [authorIds, setAuthorIds] = useState([]);
    const { authors } = useSelector((state) => state.authors);
    const { categories } = useSelector((state) => state.categories);
    const { isLoading } = useGetCategoriesQuery();
    const [createBook] = useCreateBookMutation();
    
    const options = categories.map((category) => {
        return {
            value: category.id,
            label: category.name,
        };
    });

    

    const handleChangeContent = (value) => {
        setContent(value);
    };
    const handleChangeCategory = async (e) => {
        let arr = [];
        for (let i = 0; i < e.length; i++) {
            arr.push(e[i].value)
        }
        
        setCategoryIds(arr);
    };
    const handleCreateBook = () => {
        let newBook={
            title:title,
            content:content,
            description:description,
            status:status,
            categoryIds:categoryIds
        }
        createBook(newBook);
        alert("Tạo Book thành công")
    };

    if (isLoading) {
        return <h3>Loading ...</h3>;
    }

    return (
      <div className="course-list mt-4 mb-4">
      <div className="container">
          <div className="mb-4">
              <button
                  className="btn-custom btn-create-course"
                  onClick={handleCreateBook}
              >
                  <span>
                      <i className="fa-solid fa-plus"></i>
                  </span>
                  Tạo
              </button>
              <Link
                  to={"/admin/blogs"}
                  className="btn-custom btn-refresh"
              >
                  <span>
                      <i className="fa-solid fa-angle-left"></i>
                  </span>
                  Quay lại
              </Link>
          </div>

          <div className="course-list-inner p-2">
              <div className="row">
                  <div className="col-md-8">
                      <div className="mb-3">
                          <label
                              htmlFor="course-name"
                              className="form-label fw-bold"
                          >
                              Tiêu đề
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="course-name"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                          />
                      </div>
                      
                      <div className="mb-3">
                          <label
                              htmlFor="course-description"
                              className="form-label fw-bold"
                          >
                              Mô tả
                          </label>
                          <textarea
                              className="form-control"
                              id="course-description"
                              rows="5"
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                          ></textarea>
                      </div>
                      <div className="mb-3">
                          <label
                              htmlFor="course-description"
                              className="form-label fw-bold"
                          >
                              Số trang
                          </label>
                          <textarea
                              className="form-control"
                              id="course-description"
                              rows="1"
                              value={pageNumbers}
                              onChange={e => setPageNumbers(e.target.value)}
                          ></textarea>
                      </div>
                      <div className="mb-3">
                          <label
                              htmlFor="course-description"
                              className="form-label fw-bold"
                          >
                              Năm phát hành
                          </label>
                          <textarea
                              className="form-control"
                              id="course-description"
                              rows="1"
                              value={publishingYear}
                              onChange={e => setPublishingYear(e.target.value)}
                          ></textarea>
                      </div>
                      <div className="mb-3">
                          <label
                              htmlFor="course-description"
                              className="form-label fw-bold"
                          >
                              Giá
                          </label>
                          <textarea
                              className="form-control"
                              id="course-description"
                              rows="1"
                              value={price}
                              onChange={e => setPrice(e.target.value)}
                          ></textarea>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="mb-3">
                          <label
                              htmlFor="course-type"
                              className="form-label fw-bold"
                          >
                              Tác giả
                          </label>
                          <select
                              className="form-control"
                              id="course-type"
                              onChange={e => setStatus(e.target.value == "true" ? true : false)}
                          >
                              <option value="false" selected={status === false}>Nháp</option>
                              <option value="true" selected={status === true}>Công khai</option>
                          </select>
                      </div>
                      <div className="mb-3">
                          <label
                              htmlFor="course-topic"
                              className="form-label fw-bold"
                          >
                              Thể loại
                          </label>
                          <Select options={options} isMulti />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}

export default BookAdminCreate;