import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import WritePost from './components/WritePost'
import Post from './components/Post'
import UpdatePost from './components/UpdatePost'
import Header from './components/Header'

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState([])

  const getPost = async postId => {
    const res = await fetch(`http://localhost:3001/posts/${postId}`)
    const data = await res.json()
    setPost(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3001/posts')
    const data = await res.json()
    setPosts(data)
  }

  const deletePosts = async id => {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    })

    setPosts(posts.filter(post => post.id !== id))
    window.location.href = 'http://localhost:3000'
  }

  const updatePosts = async (id, post) => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
    })

    const data = await res.json()
    console.log(data)
    const newPosts = posts.map(item => ({
      ...item,

      kr:id === item.id ? data.kr : item.kr,
      jp:id === item.id ? data.jp : item.jp,
    }))

    setPosts(newPosts)
  }

  const addPost = async post => {
    const res = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(post),
    })

    const data = await res.json()
    setPosts([...posts, data])
  }

  

  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Index posts={posts} />} />
          <Route path="/writepost" element={<WritePost addPost={addPost} />} />
          <Route
            path="/post/:postId"
            element={
              <Post deletePost={deletePosts} getPost={getPost} post={post} />
            }
          />
          <Route
            path="/updatepost/:postId"
            element={
              <UpdatePost
                getPost={getPost}
                post={post}
                updatePosts={updatePosts}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
