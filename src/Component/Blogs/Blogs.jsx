import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types'


const Blogs = ({handleAddBookMarks, handleMarkAsRead}) => {
    //console.log(handleAddBookMarks)

    console.log(handleMarkAsRead);


      const [blogs, setBlogs ] = useState([]);
      useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
      },[])
    return (
        <div className="w-2/3">

            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.key} handleMarkAsRead={handleMarkAsRead} handleAddBookMarks={handleAddBookMarks} blog={blog}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleAddBookMarks: PropTypes.func.isRequired

}


export default Blogs;