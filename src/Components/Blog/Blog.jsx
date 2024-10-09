import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span className='p-0'>{reading_time} min read</span>
                    <button className='ml-2 text-2xl' onClick={() => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx}><a href="">#{tag} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;