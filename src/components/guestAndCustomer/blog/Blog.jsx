import React, { useState } from "react";
import { getAllBlogs } from "../../../service/APIService";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    let res = await getAllBlogs();
    if (res?.data && res.data.length > 0) {
      setBlogs(res.data);
    }
  };
  return <div>Blog</div>;
};

export default Blog;
