import Org from "./Org";
import Recent from './Recent'
import { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from './Footer'

const Home = () => {
    useEffect(() => {
        let slider = document.querySelectorAll('.slider')
        M.Slider.init(slider)
        let parallax = document.querySelectorAll('.parallax')
        M.Parallax.init(parallax,{
           
        })
      }, );

    return ( 
        <div className="home">

            {/* Slider */}
            <div className="slider">
                    <ul className="slides">
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/1" /> {/* random image */}
                        <div className="caption center-align">
                        <h3>Hello ! </h3>
                        <h5 className="light grey-text text-lighten-3">Welcome to My Personal Blog</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/2" /> {/* random image */}
                        <div className="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/3" /> {/* random image */}
                        <div className="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/4" /> {/* random image */}
                        <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    </ul>
                </div>

                {/*About Me  */}
                <div className="about">
                    <h1 className='center light'>About Me</h1>
                    <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti rem cupiditate expedita suscipit similique facere eveniet, ipsam incidunt voluptates, quasi, consequatur officia animi vel enim laudantium sed reprehenderit eligendi rerum corporis. Optio est, numquam quasi cum voluptatem explicabo exercitationem error eaque iure aut repudiandae culpa, dolore, recusandae quas ea?</p>
                        </div>
                        <div className="col m6 s12">
                            <h6>Business Development</h6>
                            <div className="progress">
                                <div className="determinate" style={{width: '70%'}} />
                            </div>
                            <h6>Project Management</h6>
                            <div className="progress">
                                <div className="determinate" style={{width: '60%'}} />
                            </div>
                            <h6>Front - End Web Programming</h6>
                            <div className="progress">
                                <div className="determinate" style={{width: '50%'}} />
                            </div>
                            <h6>Requirement Engineering</h6>
                            <div className="progress">
                                <div className="determinate" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* Education  */}

                <div className="education">
                    <div className="parallax-container">
                        <div className="parallax">
                            <img src="https://wallpaperaccess.com/full/859076.jpg" />
                        </div>
                        <div className="container education">
                            <h2 className = "white-text bold center">Education</h2>
                            <div className="row center rowlogo">
                                <div className="col l3 m6 s6">
                                    <img className =" logo"src="./img/logo/alhikmah.png" alt="" />
                                </div>
                                <div className="col l3 m6 s6">
                                    <img className =" logo"src="./img/logo/dapuda.jfif" alt="" />
                                </div>
                                <div className="col l3 m6 s6">
                                    <img className =" logo"src="./img/logo/libels.png" alt="" />
                                </div>
                                <div className="col l3 m6 s6">
                                    <img className =" logo"src="./img/logo/its.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="organ">
                    <div className="container">
                        <Org></Org>
                    </div>
                </div>

                <div className="recent">
                    <div className="container">
                        <Recent></Recent>
                    </div>
                </div>

                <div className="foot">
                    <Footer />
                </div>
                



            </div>
        
     );
}
 
export default Home;