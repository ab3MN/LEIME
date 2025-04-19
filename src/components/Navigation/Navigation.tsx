import { Navbar, NavbarContent, NavbarItem } from '@heroui/react';
import { NavLink } from '@ui/NavLink/NavLink';
import { PATH } from '@constants/path';

const navItems = [
  {
    href: PATH.HOME,
    title: 'Home',
  },
  {
    href: PATH.TABLE,
    title: 'Table',
  },
  {
    href: PATH.LIST,
    title: 'List',
  },
];

export const Navigation = () => {
  return (
    <Navbar className="justify-start">
      <NavbarContent className="sm:flex gap-4 justify-center">
        {navItems.map(({ href, title }) => (
          <NavbarItem key={title}>
            <NavLink
              href={href}
              title={title}
            />
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
