import React from 'react'
import StaggeredMenu from './StaggeredMenu';
// import BubbleMenu from './BubbleMenu'

function Header() {

// stragger menu


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


// bubble menu

    const items = [
  {
    label: 'Home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: 'orange', textColor: '#ffffff' }
  },
  {
    label: 'About',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: 'purple', textColor: '#ffffff' }
  },
  {
    label: 'Projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: 'red', textColor: '#ffffff' }
  },

  {
    label: 'Contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: 'blue', textColor: '#ffffff' }
  }
];

  return (
    <>

    {/* stragger menu */}


    <div style={{ }}>
  <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#000000ff"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    logoUrl="/logo.png"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>

{/* bubblemenu */}

  {/* <BubbleMenu
   logo={
  <div className="flex items-center gap-2">
    <img
      src="/logo.png"
      alt="RB Logo"
      className="h-30 w-auto"
    />
    <span className="text-sm font-semibold tracking-wide">
      
    </span>
  </div>
}

  items={items}
  menuAriaLabel="Toggle navigation"
  menuBg="#ffffff"
  menuContentColor="#111111"
  useFixedPosition={false}
  animationEase="back.out(1.5)"
  animationDuration={0.9}
  staggerDelay={0.12}
/> */}
    </>
  )
}

export default Header