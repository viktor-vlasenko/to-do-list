import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Created by me</p>
      <p>{'Inspired and guided by '}
        <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA">
          Traversy Media
        </a>
      </p>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About