
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookMarks,readingTime}) => {
    console.log(readingTime)
    //console.log(bookMarks);
    return (
        <div className="w-1/3">
            <p>spending time:{readingTime}</p>
            <h1>Bookmarks:{bookMarks.length}</h1>
           

            {
                bookMarks.map(bookMark=><Bookmark bookMark={bookMark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;

Bookmarks.propTypes={
    bookMarks: PropTypes.array.isRequired
}