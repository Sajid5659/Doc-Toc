import React from 'react';

const Blog = ({blog}) => {
    const {id,title,content}=blog
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title border-b border-dashed border-gray-400">{id}. {title}</h2>
                <p className='text-gray-500'>{content}</p>
            </div>
        </div>
    );
};

export default Blog;