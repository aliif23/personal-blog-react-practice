import { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import useFetch from "./UseFetch.js";
import { Link } from "react-router-dom";


const Org = () => {
    const {data: org , error , pending } = useFetch('http://localhost:3001/organisasi');
    useEffect(() => {
        const tab = document.querySelectorAll('.tabs')
        M.Tabs.init(tab);
        
    },)
    return ( 
    <div className="organizational">
        <h2 className='center light'>Organizational Experiences</h2>
        <div className="row">
            {pending && (
                  <div className="center">
                      <div class="preloader-wrapper big active center">
                  <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                      <div class="circle"></div>
                    </div><div class="gap-patch">
                      <div class="circle"></div>
                    </div><div class="circle-clipper right">
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
                  </div>
            )}
            {error && (
                <div className="error">
                    <h3 className="center light">
                        {error}
                    </h3>
                </div>
            )}
            {org && (
                <div className="work">
                    
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><a href="#test1">Stratek</a></li>
                                    <li className="tab col s3"><a className="active" href="#test2">HMSI</a></li>
                                    <li className="tab col s3 "><a href="#test3">SFI</a></li>
                                    <li className="tab col s3"><a href="#test4">ITS Basketball</a></li>
                                </ul>
                            </div>
                            <div id="test1" className="col s12 center">
                                <h3>{org[0].nama}</h3>
                                <h5>{org[0].jabatan}</h5>
                                <h6>{org[0].waktu}</h6>
                                <img className = 'org' src={`./img/logo/${org[0].gambar[0]}`} alt="" />
                                <p>{org[0].overview}</p>
                                <Link to = {`/work/${org[0].id}`}><button className ='btn'>Details </button></Link>
                            </div>
                            <div id="test2" className="col s12 center">
                            <h3>{org[1].nama}</h3>
                                <h5>{org[1].jabatan}</h5>
                                <p>{org[1].waktu}</p>
                                <img className = 'org' src={`./img/logo/${org[1].gambar[0]}`} alt="" />
                                <p>{org[1].overview}</p>
                                <Link to = {`/work/${org[1].id}`}><button className ='btn'>Details </button></Link>
                            </div>
                            <div id="test3" className="col s12 center">
                            <h3>{org[2].nama}</h3>
                                <h5>{org[2].jabatan}</h5>
                                <p>{org[2].waktu}</p>
                                <img className = 'org' src={`./img/logo/${org[2].gambar[0]}`} alt="" />
                                <p>{org[2].overview}</p>
                                <Link to = {`/work/${org[2].id}`}><button className ='btn'>Details </button></Link>
                            </div>
                            <div id="test4" className="col s12 center">
                            <h3>{org[3].nama}</h3>
                                <h5>{org[3].jabatan}</h5>
                                <p>{org[3].waktu}</p>
                                <img className = 'org' src={`./img/logo/${org[3].gambar[0]}`} alt="" />
                                <p>{org[3].overview}</p>
                                <Link to = {`/work/${org[3].id}`}><button className ='btn'>Details </button></Link>
                            </div>
                      </div>
                        {/* // <div className="card col s12 m5 offset-m1 l5 offset-l1 " key={org.id}>
                        //     <div className="card-image waves-effect waves-block waves-light">
                        //     <img className="activator org" src={`./img/logo/${org.gambar[0]}`} />
                        //     </div>
                        //     <div className="card-content">
                        //     <span className="card-title activator grey-text text-darken-4">{org.nama}<i className="material-icons right">more_vert</i></span>
                        //     <h6>{org.jabatan}</h6>
                        //     <h9>Masa Aktif : {org.waktu} </h9>
                        //     </div>
                        //     <div className="card-reveal">
                        //     <span className="card-title grey-text text-darken-4">Overview<i className="material-icons right">close</i></span>
                        //     <p>{org.overview}</p>
                        //     <Link to = {`/work/${org.id}`}><button className="btn">Details</button></Link>
                        //     </div>
                        // </div> */}
                    
                </div>
            )}
        </div>
    </div>

     );
}
 
export default Org;