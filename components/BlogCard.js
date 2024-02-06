import Link from 'next/link'
import React from 'react'

const BlogCard = ({ title, author, metaDesc, readMoreLink, slug }) => {
    return (
        <div className=' bg-white rounded-xl 
    shadow-lg p-6 mb-6  border-2 border-slate-600 w-96 h-full'>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <p className='text-gray-600 mb-4'>{metaDesc}</p>
            <p className='text-gray-600 text-sm font-bold mb-5'>Author: {author}</p>
            <Link href={"/blogpost/" + slug} className='bg-purple-500 underline
        text-white px-4 py-2 rounded-sm inline-block cursor-pointer'>
                Read More</Link>
        </div>
    )
}

export default BlogCard