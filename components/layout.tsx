import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'rsuite';
import MemberIcon from '@rsuite/icons/Member';
import './layout.less';

interface LayoutProps {
  activeKey?: string;
  children?: React.ReactNode;
}

interface NavLinkProps {
  as: string;
  href: string;
}

const NavLink = React.forwardRef((props: NavLinkProps, ref: React.Ref<HTMLAnchorElement>) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

NavLink.displayName = 'NavLink';

const Layout: React.FunctionComponent<LayoutProps> = ({ activeKey, children }) => {
  return (
    <div className="container">
      <Navbar>
        <Navbar.Brand>
          ZADACHKI.BG
        </Navbar.Brand>
        <Nav activeKey={activeKey}>
          <Nav.Item eventKey="home" href="/" as={NavLink}>
            Home
          </Nav.Item>
          <Nav.Item eventKey="one" href="/one" as={NavLink}>
            Page 1
          </Nav.Item>
          <Nav.Item eventKey="users" href="/users" as={NavLink}>
            Users
          </Nav.Item>
          <Nav.Item eventKey="test" href="/test" as={NavLink}>
            test
          </Nav.Item>
          <Nav.Item eventKey="register" href="/register" icon={<MemberIcon />} as={NavLink}>
            Register
          </Nav.Item>
        </Nav>
      </Navbar>
      {children}
    </div>
  );
};

Layout.propTypes = {
  activeKey: PropTypes.string,
  children: PropTypes.node
};

export default Layout;
