import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../../../service/APIService";
import { blogs } from "../../../utils/constants";
import "./Blog.scss";

const Blog = () => {
  // const [blogs, setBlogs] = useState([]);

  // const fetchAllBlogs = async () => {
  //   let res = await getAllBlogs();
  //   if (res?.data && res.data.length > 0) {
  //     setBlogs(res.data);
  //   }
  // };

  useEffect(() => {
    // fetchAllBlogs();
  }, []);

  const [currentImage, setCurrentImage] = useState(1);

  const toImage = (imgNum) => {
    setCurrentImage(imgNum);
  };

  return (
    <div className="blog-container">
      <section className="section-blogsAndTips">
        <div className="carousel">
          <div className="image-container">
            <div
              className="image-slider"
              style={{
                transform: `translateX(-${(currentImage - 1) * 100}%)`,
              }}
            >
              <div className="image-filter"></div>
              {blogs.map((blog) => (
                <div key={blog.id} className="image-wrapper">
                  <img
                    src={blog.thumbnail}
                    alt={`${blog.id}`}
                    className={
                      parseInt(blog.id) === parseInt(currentImage)
                        ? `active`
                        : ""
                    }
                  />
                  <div className="image-description">
                    <div className="date-author-container">
                      <div>{blog.date}</div>
                      <div style={{ marginLeft: "10px" }}>{blog.author}</div>
                    </div>
                    <h1>{blog.title}</h1>
                    <div className="button-container">
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn">
            {blogs.map((blog) => (
              <button
                key={blog.id}
                className={
                  parseInt(blog.id) === parseInt(currentImage) ? `active` : ""
                }
                onClick={() => toImage(blog.id)}
              ></button>
            ))}
          </div>
        </div>
        <div className="heading">
          <h2>OUR BLOGS &amp; TIPS</h2>
          <div>
            <h1>Stay Informed, Discover Inspiration</h1>
          </div>
        </div>
        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img
                className="thumbnail"
                src={blog.thumbnail}
                alt="Blog Thumbnail"
              />
              <div className="desc-container">
                <h2 className="title">{blog.title}</h2>
                <div className="date-author-container">
                  <div>{blog.date}</div>
                  <div style={{ marginLeft: "10px" }}>{blog.author}</div>
                </div>
                <div className="content-container">{blog.content}</div>
                <div className="button-container">
                  <button>Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
