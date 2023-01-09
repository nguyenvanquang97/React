import React, { useEffect, useState } from "react";
import bookApi from "../../../app/api/bookApi";
import { Link, useParams } from "react-router-dom";
import commentApi from "../../../app/api/commentApi";
import { convertDate } from "../../../utils/utils";
function BookDetail() {
  const { bookId, slug } = useParams();
  const [book, setBook] = useState({});
  const [count,setCount]=useState(1);
  const [bookByAuthor,setBookByAuthor]=useState([])
  const [comments,setComments]=useState([])
  // Lấy danh sách bài viết
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await bookApi.getBookById(bookId, slug);
        setBook(res.data);
        console.log(res.data)
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, []); 
  useEffect(() => {
    const fetchComment= async () => {
      try {
        const res = await commentApi.getComments(bookId);
        setComments(res.data);
        console.log(res.data)
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchComment();
  }, []); 
  useEffect(() => {
    const fetchBookByAuthor = async () => {
      if(book.id){
        try {
       
          const res= await bookApi.getBookByAuthorid(book.authors[0].id);
          setBookByAuthor(res.data);
          console.log(res.data)
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchBookByAuthor();
  },[book]);
  let sumPrice=book.price*count;
  
  const tru=()=>{
    if (count <= 1) {
        alert("số lượng không thể nhỏ hơn 1");
      }else{
        setCount(count-1)
      }   
 };
 const cong=()=>{
   setCount(count+1)
 };
  return (
    <div className="tm-main-content no-pad-b">
      <section className="row tm-item-preview ">
        <div className="col-md-6 col-sm-12 mb-md-0 mb-5 ">
          <img
            src={book?.thumbnail??"https://product.hstatic.net/1000363117/product/tb30-1_7a670519dc344827af0cc77ba6c15afa_master.jpg"}
            alt="Image"
            className="img-fluid tm-img-center-sm image-bookDetail"
          />
        </div>
        <div className="col-md-6 col-sm-12 infor-bookDetail">
          <h2 className="tm-blue-text">{book.title}</h2>
          <p>Mô tả:{book.description}</p>
          <p>Tác giả:{book.authors?.map((a) => a.name).join(", ")}</p>

          <p>Thể loại:{book.categories?.map((c) => c.name).join(", ")}</p>

          <p>Năm xuất bản:{book.publishingYear}</p>
          <p>Số trang:{book.pageNumbers}</p>
            <p className="price">
                      {sumPrice.toLocaleString("en")} đ
                    </p>
                    <div className="d-inline-block me-3">
                  <button
                    className="border py-2 px-3 d-inline-block fw-bold bg-light"
                    onClick={() => tru()}
                  >
                    -
                  </button>
                  <span  className="py-2 px-3 d-inline-block fw-bold count ">
                    {count}
                  </span>
                  <button
                    className="border py-2 px-3 d-inline-block fw-bold bg-light"
                    onClick={() => cong()}
                  >
                    +
                  </button>
                </div>
          <div>
            <a href="#" className="tm-btn tm-btn-gray tm-margin-r-20 ">
              Thêm vào giỏ
            </a>
            <a href="#" className="tm-btn tm-btn-blue">
              Mua ngay
            </a>
          </div>
        </div>
      </section>
     
      <div className="tm-gallery no-pad-b">
      <h4 style={{marginTop:"40px"}}>Sách cùng tác giả</h4>
        <div className="row book-equal-author" >
          <figure className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
            <a href="preview.html">
              <div className="tm-gallery-item-overlay">
                <img
                  src="https://product.hstatic.net/1000363117/product/tb30-1_7a670519dc344827af0cc77ba6c15afa_master.jpg"
                  alt="book"
                  className="img-fluid tm-img-center"
                />
              </div>
              <p className="tm-figcaption no-pad-b">Suspendisse suscipit</p>
            </a>
          </figure>
        </div>
      </div>
      <div >
        <h4>Bình luận</h4>
        
        {comments.length > 0 &&
              comments.map((comment) => (
        <div style={{marginBottom:"10px"}} key={comment.id}>
          
        <span className="infor-user-comment"> <img
                  src={comment.user?.avatar ?? "https://via.placeholder.com/150"}
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt={comment.user?.name}
                /> <p style={{marginBottom:"7px"}}>{comment.user.name}</p></span> 
        <div className="comment">
        <p>{comment.content}</p>
        </div>
        <p>{convertDate(comment.createdAt)}</p>
        </div>
              ))}
        </div>
    </div>
  );
}

export default BookDetail;
