import M from 'materialize-css/dist/js/materialize.min.js';
import {useEffect} from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    useEffect(() => {
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);
      }, [ ]);
    

    return ( 
        
        
        <div className="navbarpage">
            <div class="navbar-fixed">
                <nav>
                    <div className="container">
                        <div class="nav-wrapper">
                            <Link to = '/'><a class="brand-logo">Aliif's Blog</a></Link>
                            <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul class="right hide-on-med-and-down">
                                <li><Link to ='/'>Home</Link></li>
                                <li><Link to ='/project'>More About Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Sidenav */}
            <ul class="sidenav" id="mobile-nav">
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/project'>About Me</Link></li>
                
            </ul>
        </div>
        


     );
}
 
export default Navbar;