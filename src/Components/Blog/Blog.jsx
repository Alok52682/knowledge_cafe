import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {

    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div>
            <img src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
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
    blog: PropTypes.object.isRequired
}

export default Blog;