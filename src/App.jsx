
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 
   const [bookMarks, setBookMarks] = useState([]);
   const [readingTime, setReadingTime]= useState(0);

   const handleAddBookMarks = blog=>{
    const newBookMarks =[...bookMarks,blog];
    //console.log(newBookMarks)
    setBookMarks(newBookMarks);
   }

   const handleMarkAsRead = (id,time) =>{
    //console.log('reading time', time);

    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
    console.log('remove',id)

    const remainingBookMark = bookMarks.filter(bookMark =>bookMark.id !==id);
    setBookMarks(remainingBookMark);
   }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex mx-[100px]'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddBookMarks={handleAddBookMarks}></Blogs>
      <Bookmarks readingTime={readingTime} bookMarks={bookMarks}></Bookmarks>
      </div>
    
      
    </>
  )
}

export default App
