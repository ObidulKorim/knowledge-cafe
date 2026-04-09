import './index.css';
import './App.css'
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id,time) => {
    
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App


