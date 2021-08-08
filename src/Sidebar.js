import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({webdev,gamedev,erp}) => {
    
    

    useEffect(() => {
        let sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav)
        

        let collapse = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapse)
    }, )
    return ( 
        <div className="portlink">
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="../img/logo/back.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="../img/logo/alip.jpg" /></a>
                        <a href="#name"><span className="white-text name">Muhammad Aliif Gadri</span></a>
                        <a href="#email"><span className="white-text email">aliif1540@gmail.com</span></a> 
                       <div className="links">
                            <a href="https://www.linkedin.com/in/muhammad-aliif-gadri-585b19192/" target='blank'><img src="../img/logo/linkedin.png" alt="" className="logoheader" /></a>
                            <a href="https://www.instagram.com/maliifgadri/" target='blank'><img src="../img/logo/insta.png" alt="" className="logoheader" /></a>
                            <a href="https://www.stratek.co.id" target='blank'><img src="../img/logo/stratek1.png" alt="" className="logoheader" /></a>
                       </div>
                                                                         
                    </div>
                </li>
                
                <li><a>My Projects : </a></li>
                <ul className="collapsible">
                    <li>
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Web Development<i class="material-icons right">arrow_drop_down</i></div>
                    <div className="collapsible-body">
                        {webdev.map((webdev) => (
                            <div className="webdev" key = {webdev.id} >
                                <Link to = {`/project/${webdev.id}`}>
                                    <li><a href=''>{webdev.nama}</a></li>
                                </Link>
                            </div>
                        ))}
                    </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">place</i>Game Development<i class="material-icons right">arrow_drop_down</i></div>
                        <div className="collapsible-body">
                        {gamedev.map((gamedev) => (
                        <div className="gamedev" key = {gamedev.id} >
                            <Link to = {`/project/${gamedev.id}`}>
                                <li><a href=''>{gamedev.nama}</a></li>
                            </Link>
                        </div>
                    ))}
                    </div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>ERP Implementation<i class="material-icons right">arrow_drop_down</i></div>
                    <div className="collapsible-body">
                    {erp.map((erp) => (
                        <div className="erp" key = {erp.id} >
                            <Link to = {`/project/${erp.id}`}>
                                <li><a href=''>{erp.nama}</a></li>
                            </Link>
                        </div>
                    ))}
                    </div>
                    </li>
                </ul>
                
                <li><div className="divider" /></li>
                <li><a className="subheader">Subheader</a></li>                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                
            </ul>
             <a href="#" data-target="slide-out" className="sidenav-trigger"><button className="btn">Check Out My Projects</button></a>
        </div>
     );
}
 
export default Sidebar;