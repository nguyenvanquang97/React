import React, { useEffect, useState } from "react";
import bookApi from "../../../app/api/bookApi";
import categoryApi from "../../../app/api/categoryApi";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  row,
  col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from "reactstrap";

function BookList() {
  const location = useLocation();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [categoriess, setCategoriess] = useState([]);
  const [page, setPage] = useState(0);
  const [term, setTerm] = useState("");
  // Khởi tạo state ban đầu dựa trên url hiện tại
  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    return {
      search: params.search || "",
      category: params.category || "",
    };
  });
  // console.log(filter);
  // Khi url thay đổi => parse lại url => lưu vào state
  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params)
    setFilter({
      search: params.search || "",
      category: params.category || "",
    });
  }, [location.search]);

  // Lấy danh sách bài viết
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log(filter)
        const query = queryString.stringify(filter, {
          skipEmptyString: true,
        }); // category=sylas&name=abc
        const res = await bookApi.getBooks(query);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, [filter]);

  // Lấy danh sách category
  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        let res = await categoryApi.getCategories();
        setCategoriess(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoies();
  }, []);

  // Lọc theo category
  const filterByCategory = (name) => {
    console.log(name)
    const params = { ...filter, category: name };

    navigate({
      pathname: location.pathname, // http://localhost:3000
      search: queryString.stringify(params, {
        // category=sylas&name=abc
        skipEmptyString: true,
      }),
    });
  };
  //lọc theo search
  const handleSearch = () => {
    const params = { ...filter, search: term };
    navigate({
      pathname: location.pathname, // http://localhost:3000
      search: queryString.stringify(params, {
        // category=sylas&name=abc
        skipEmptyString: true,
      }),
    });
  };

  return (
    <div className="tm-main-content">
      <section className="tm-margin-b-l">
        <header>
          <h2 className="tm-main-title">Welcome to our bookstore</h2>
        </header>

        <p>
          Shelf HTML template is provided by Tooplate. Please tell your friends
          about it. Thank you. Images are from Unsplash website. In tincidunt
          metus sed justo tincidunt sollicitudin. Curabitur magna tellus,
          condimentum vitae consectetur id, elementum sit amet erat.
        </p>

        <div className="tm-gallery">
          <div className="search-book">
            <div className="col-md-6">
              <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="form-control border-0 seach-form-input"
                  value={term}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <span className="text-black-50 seach-form-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>

              <div className="mb-4">
                {categoriess.length > 0 &&
                  categoriess.map((category) => (
                    <button
                      key={category.id}
                      className="btn btn btn-outline-success"
                      onClick={() => filterByCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div className="row">
            {books.length > 0 &&
              books?.map((book) => (
                <figure
                  key={book.id}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item book-cart"
                >
                  <Link to={`/books/${book.id}/${book.slug}`}>
                    <div>
                      <div className="sale-book">
                        -{Math.floor(Math.random() * 31) + 10}%
                      </div>
                      <div className="tm-gallery-item-overlay">
                        <div className="image-book">
                          <img src={book?.thumbnail} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <p className="tm-figcaption">{book.title}</p>
                    <p className="book-price">
                      {book.price.toLocaleString("en")} đ
                    </p>
                    <div className="infor-book">
                    <div className="rainbow">
                      <p>
                        Tác giả:{book?.authors?.map((a) => a.name).join(", ")}
                      </p>
                      <p>
                        Thể loại:
                        {book?.categories?.map((c) => c.name).join(", ")}
                      </p>
                      <p>Số trang:{book.pageNumbers}</p>
                    </div>
                  </div>
                  </Link>
                
                </figure>
              ))}
          </div>
        </div>

        <nav className="tm-gallery-nav">
          {/* <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link active" href="#">1</a></li>
                <li className="nav-item"><a className="nav-link" href="#">2</a></li>
                <li className="nav-item"><a className="nav-link" href="#">3</a></li>
                <li className="nav-item"><a className="nav-link" href="#">4</a></li>                    
            </ul> */}
          <Container className="nav justify-content-center">
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink previous></PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink>4</PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink>5</PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination className="nav-item">
              <PaginationItem>
                <PaginationLink next></PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container>
        </nav>
      </section>

      <section className="media tm-highlight tm-highlight-w-icon">
        <div className="tm-highlight-icon">
          <i className="fa tm-fa-6x fa-meetup"></i>
        </div>

        <div className="media-body">
          <header>
            <h2>Need Help?</h2>
          </header>
          <p className="tm-margin-b">
            Curabitur magna tellus, condimentum vitae consectetur id, elementum
            sit amet erat. Phasellus arcu leo, sagittis fringilla nisi et,
            pulvinar vestibulum mi. Maecenas mollis ullamcorper est at
            dignissim.
          </p>
          <a href="" className="tm-white-bordered-btn">
            Live Chat
          </a>
        </div>
      </section>
    </div>
  );
}

export default BookList;
