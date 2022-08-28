import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdatePost = ({ getPost, post, updatePosts }) => {
  const { postId } = useParams()
  const [kr, setKr] = useState(post.kr)
  const [jp, setJp] = useState(post.jp)

  useEffect(() => {
    getPost(postId)
  }, [])

  const onSubmit = e => {
    e.preventDefault()

    updatePosts(postId, { kr, jp })
    window.location.href = `http://localhost:3000/post/${postId}`
  }
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>한국어</label>
          <input
            type="text"
            value={kr}
            onChange={e => setKr(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>일본어</label>
          <input
            type="text"
            value={jp}
            onChange={e => setJp(e.target.value)}
          />
        </div>


        <input type="submit" value="게시하기" className="btn btn-block" />
      </form>
    </div>
  )
}

export default UpdatePost
