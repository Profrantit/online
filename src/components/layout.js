import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <a class="active" href="/">
            <i class="arrow left"></i>
          </a>
        </Link>
        <Link></Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="about">
            <img
              alt="profile"
              class="profile"
              src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-transparent-673_673.png"
            ></img>
          </ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
