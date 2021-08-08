const Footer = () => {
    return ( 
        <div className="footer">
            <footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Hey ! </h5>
        <p className="grey-text text-lighten-4">For more information you can contact me through these social medias ! </p>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Contact Me</h5>
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="https://www.instagram.com/maliifgadri/" target ='_blank'>
              <img src="./img/logo/insta.png" alt=""className ='contactlogo' />Instagram
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/muhammad-aliif-gadri-585b19192/" target ='_blank'>
              <img src="./img/logo/linkedin.png" alt=""className ='contactlogo' />Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2014 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  </div>
</footer>

        </div>
     );
}
 
export default Footer;