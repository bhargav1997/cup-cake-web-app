const Header = () => {
   return (
      <header id='header'>
         <h2>
            <a href='#' className='logo'>
               Cup Cakes
            </a>
         </h2>
         <nav id='navItems'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Menu</a>
            <a href='#' className='active'>
               Order
            </a>
         </nav>
      </header>
   );
};

export default Header;
