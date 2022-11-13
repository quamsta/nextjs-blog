import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'

import { Container, Navbar, Nav } from 'react-bootstrap'


export const NavLink = (props) => {

  let className = classNames({
    "nav-link": true,
    "is-active": props.pathname
  })
  return <Link href={props.path} legacyBehavior><a className={className}>{props.label}</a></Link>

}

const NavbarDq = ({ router: { pathname } }) => (
  <header>
    <div id="wrapper-navbar">
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
        <Container >
          <Link href="/" className="navbar-brand">React-Bootstrap</Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink path="/" label="Home" pathname />
              <NavLink path="/posts/ssg-ssr" label="SSG v. SSR" pathname />
              <NavLink path="/posts/pre-rendering" label="Pre-rendering" pathname />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>
)

export default withRouter(NavbarDq)



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Link from "next/link"
// function NavbarDq() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
//             <Link href="/posts/ssg-ssr" passHref><Nav.Link>SSG v. SSR</Nav.Link></Link>
//             <Link href="/nextjs-blog/posts/pre-rendering" passHref><Nav.Link>Pre-rendering</Nav.Link></Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarDq;