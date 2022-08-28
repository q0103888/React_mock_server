import React from 'react'
import { Link } from 'react-router-dom'

const Index = ({ posts }) => {
  return (
    <div>
      <Link to="/writepost">단어 입력하기</Link>
      <div>
        <table>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/post/${post.id}`}>{post.kr}</Link>
              </td>
              <td>{post.jp}</td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  )
}

export default Index
