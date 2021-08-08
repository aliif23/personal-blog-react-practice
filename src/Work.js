import { useParams } from "react-router";
import useFetch from "./UseFetch";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Work = () => {
    const {id} = useParams();
    const {data: work , error, pending} = useFetch('http://localhost:3001/organisasi/' + id);
    const history = useHistory();

    const back = () =>{
        history.go(-1);
    }

    return ( 
        <div className="work-details">
            <div className="container">
                {pending && (
                    <div className="center">
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
                    </div>
                )}
                {error && (
                    <div className="center">
                        <h2>{error}</h2>
                    </div>
                )}
                {work && (
                    <div className="content">
                        <button className="btn back" onClick = {() =>{
                            back();
                        }}>Back</button>
                        <h2 className="center light">{work.nama}</h2>
                        <div className="row">
                            <div className="col s6 m6">
                                <img className = 'gambarwork' src={`../img/logo/${work.gambar[0]}`} alt="" />
                            </div>
                            <div className="col s6 m6">
                                <img className = 'gambarwork' src={`../img/logo/${work.gambar[1]}`} alt="" />
                            </div>
                            <h5>Position : {work.jabatan}</h5>
                            <h5>{work.waktu}</h5>
                            <p>{work.details}</p>
                        </div>
                        
                    </div>
                )}
            </div>
            <Footer />
        </div> 
     );
}
 
export default Work;