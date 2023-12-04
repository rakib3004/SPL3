import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";

const NavBar = () => {
  return (
    <Navbar fluid={true}>
    <Navbar.Container className="flex items-center justify-between">
      <Navbar.Container className="flex items-center">
        <Navbar.Brand>
          <img
            src="vite.svg"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Divider></Navbar.Divider>
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Home" />
          <Navbar.Link linkName="Datasets" />
          <Navbar.Link linkName="About" />
        </Navbar.Container>
        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Datasets" />
            <Navbar.Link linkName="About" />

          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>

      <Navbar.Container className="flex gap-2">
        <Button size="sm" type="link">
          <span>
            <MagnifyingGlass size={20} color="#444" />
          </span>
          <span className="ml-2 text-metal-600">Search</span>
        </Button>
        <Navbar.Toggle />
      </Navbar.Container>
    </Navbar.Container>
  </Navbar>
  )
}

export default NavBar