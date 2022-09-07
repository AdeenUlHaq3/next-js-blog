// import type { NextPage } from 'next'
import Head from 'next/head'

//components
import {
  PostCard,
} from '../components';

import { getPosts } from '../services';

type FeaturedImage = {
  url: string,
};

type Post = {
  title: string,
  excerpt: string,
  featuredImage: FeaturedImage,
};

type Props = {
  posts: Post[],
};

const Home = ({ posts }: Props) => {
  return (
    <div className="container mx-auto px-10">
      <Head>
        <title>CodeTuber Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-28 mb-10 px-6 bg-primary h-44 flex items-center rounded-lg'>
        <div>
        <p className='text-4xl text-white mb-2'>Write Blog</p>
        <p className='text-xl text-gray-800'>A simple blogging website</p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {/* Posts */}
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  post={post}
                />
              )
            })
          }
        </div>
        {/* Categories */}
        <div className="lg:col-span-4 col-span-1 mb-4 rounded-lg border border-gray-800">
          <div className='lg:sticky relative top-20'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let posts = (await getPosts()) || [];

  type Post = {
    node: object,
  };

  posts = posts.map(({ node }: Post) => node);

  return {
    props: {
      posts,
    }
  }
};

export default Home
