import { useParams } from "react-router";
import useFetch from "./UseFetch";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const ProjectDetails = () => {
    const {id} = useParams();
    const {data : project, error, pending} = useFetch('http://localhost:3003/project/' + id);
    const history = useHistory();
    const back = () => {
        history.go(-1)
    }
    useEffect(() => {
        let mbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mbox);

        
    },)

    


    return ( 
        <div className="details">
            <div className="container">
            {error && (
                <div className="error center">
                    <p>{error}</p>
                </div>
            )}
            {pending && (
                <div className="loading">
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
                </div>
            )}

            {project && (
                
                <div className="project-details">
                    <button className="btn back" onClick = { () => {
                        back()
                    }}>Back</button>
                    <h1 className="center">{project.nama}</h1>
                    <div className="row">
                    <div className="gambarutama col s12 m12 l12">
                        <img src={`../img/project/${project.gambar[0]}.png`} alt="" />
                    </div>
                        <div className="row iki">
                        {project.gambar.map((gambar) => (
                                <img className="slide col s4 m4 l4 materialboxed" src={`../img/project/${gambar}.png`} alt="" />
                        ))}    
                        </div>
                    </div>
                    <h5>Client : {project.client}</h5>
                    <h5>Type : {project.type}</h5>
                    <p>{project.details}</p>
                    
                </div>
                
            )}

            </div>
        <Footer />
        </div>
      
        
     );
}
 
export default ProjectDetails;