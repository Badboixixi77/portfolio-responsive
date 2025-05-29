import React from 'react';

const DesktopNav: React.FC = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNav; 