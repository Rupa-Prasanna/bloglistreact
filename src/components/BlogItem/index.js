// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem

  return (
    <li className="blog-item">
      <h1> {title} </h1>
      <p> {description}</p>
      <p> {publishedDate} </p>
    </li>
  )
}
export default BlogItem
