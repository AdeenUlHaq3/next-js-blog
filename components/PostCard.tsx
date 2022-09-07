import React from 'react'

// import Image from 'next/image'

type FeaturedImage = {
    url: string,
};

type Post = {
    title: string,
    excerpt: string,
    featuredImage: FeaturedImage,
};

type Props = {
    post: Post,
};

const PostCard = ({ post }: Props) => {
    const {
        title,
        excerpt,
        featuredImage: { url },
    } = post;

    console.log(post);

    return (

        <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl dark:border-gray-700 dark:bg-gray-800 mb-4">
            <img
                className="oobject-cover w-full h-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={url}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>
            </div>
        </a>
    )
}

export default PostCard