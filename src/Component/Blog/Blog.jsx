import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa6";



const Blog = ({blog, handleAddBookMarks, handleMarkAsRead}) => {

    //console.log(handleAddBookMarks);
    console.log(handleMarkAsRead);
    const { id,title, cover, author_img,author, posted_date, reading_time,hashtag} =blog;
    return (
        <div>

            <img src={cover} alt="" />

             <div className='flex justify-between'>
             <div className='flex mt-[16px] gap-[10px]'>
              <div>
                <img className='h-[60px] w-[60px]' src={author_img} alt="" srcset="" />
            </div>
            <div>
                <h1>{author}</h1>
                <p>{posted_date}</p>
            </div>
            
              </div>

              <div className='mt-[16px]'>
                <span>{reading_time}</span>min time<button onClick={()=>handleAddBookMarks(blog)}><FaBookmark /></button>
              </div>
             </div>

             <h1 className='text-4xl font-bold'>{title}</h1>

             <p>{hashtag}</p>

             
             <button onClick={()=>handleMarkAsRead(id,reading_time)}>mark as read</button>



        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired

   
}

export default Blog;