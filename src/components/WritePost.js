import React, { useState } from 'react'

const WritePost = ({ addPost }) => {
  const [kr, setKr] = useState('')
  const [jp, setJp] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    addPost({ kr, jp })

    setKr('')
    setJp('')
    window.location.href = 'http://localhost:3000/'
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>한국어</label>
        <input
          type="text"
          placeholder="한국어 단어를 입력하세요"
          value={kr}
          onChange={e => setKr(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>일본어</label>
        <input
          type="text"
          placeholder="일본어를 입력하세요"
          value={jp}
          onChange={e => setJp(e.target.value)}
        />
      </div>


      <input type="submit" value="게시하기" className="btn btn-block" />
    </form>
  )
}

export default WritePost
