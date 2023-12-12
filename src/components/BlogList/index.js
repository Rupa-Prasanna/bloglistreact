// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachItem => (
        <BlogItem eachItem={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
