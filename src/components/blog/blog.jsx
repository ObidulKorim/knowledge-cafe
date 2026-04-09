import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { id,title, cover, author, author_img, posted_date,hashtags, reading_time } = blog;
    return (
        <div className=' space-y-6'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center '>
                <div className='flex gap-6 '>
                    <img className='w-14.5' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span className='text-lg'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>

            </div>
            <h2 className="text-4xl ">{title}</h2>
            <p className=''>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className='text-purple-700 underline mb-6'>
                Mark as read
            </button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func

}

export default Blog;