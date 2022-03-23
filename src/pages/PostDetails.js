import React from 'react'
import PostsContainer from '../components/PostsContainer'

export default function PostsDetails({setPosts,posts}) {
  return (
    <div>
        <PostsContainer setPosts={setPosts} posts={posts}/>
    </div>
  )
}
