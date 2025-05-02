import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * NavLink component for consistent navigation styling
 *
 * According to the Navigation Components in the Component Library Documentation:
 * - Should have hover and active states
 * - Should have mobile styling variant
 * - Uses uppercase tracking-widest styling
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  mobile = false,
  onClick,
  className = '',
}) => {
  const router = useRouter();
  const isActive = router.pathname === href || router.asPath === href;

  // External link check
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  // For hash links on the same page
  const isHashLink = href.startsWith('#');

  // Classes based on active state and mobile view
  const linkClasses = `
    font-retroSans uppercase tracking-widest text-sm
    transition duration-300
    px-3 py-2
    ${mobile ? 'text-xl py-4 border-b border-retro-aqua/20' : ''}
    ${
      isActive
        ? 'text-retro-orange relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-retro-orange after:rounded-full'
        : 'hover:text-retro-orange'
    }
    ${className}
  `;

  // Render as appropriate link type
  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (isHashLink) {
    return (
      <a href={href} className={linkClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
