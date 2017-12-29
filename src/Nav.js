import React from 'react'
// import NavItem from '../node_modules/react-bootstrap/es/NavItem.js'
import { Nav, Navbar} from 'react-bootstrap'

export default function ErndoNav (props) {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Erndo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {
            [
              {
                href: 'section__sign-up',
                text: 'Sign Up'
              },
              {
                href: 'section__business',
                text: 'For Businessess'
              },
              {
                href: null,
                text: 'For Shoppers'
              },
              {
                href: 'faq',
                text: 'FAQ'
              },
              {
                href: 'contact',
                text: 'Contact Us'
              }
            ].map(meta => (
              <li role="presentation" class="">
                <a href={`#${meta.href}`}>{meta.text}</a>
              </li>
            ))
          }
        </Nav>
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
