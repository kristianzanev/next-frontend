import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavbarProps } from 'rsuite';
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
        <Nav activeKey={activeKey}>
          <Nav.Item eventKey="home" href="/">
            Home
          </Nav.Item>
          <Nav.Item eventKey="one" href="/one">
            Page 1
          </Nav.Item>
          <Nav.Item eventKey="two" href="/two">
            Page 2
          </Nav.Item>
          <Nav.Item eventKey="users" href="/users">
            Users
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
