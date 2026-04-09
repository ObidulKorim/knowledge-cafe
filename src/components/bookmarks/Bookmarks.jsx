import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3  text-center bg-gray-500/50 rounded-xl h-fit self-start mt-20  ">
            <div>
                <h3 className="text-3xl font-bold p-4">Spent time on read :{readingTime}</h3>
            </div>
            <h3 className="text-3xl font-bold rounded-xl p-3 m-3 ">Bookmarked Blogs :{bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    Bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;