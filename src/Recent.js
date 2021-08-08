import useFetch from "./UseFetch";
import { Link } from "react-router-dom";

const Recent = () => {
    const {data:work , error, pending} = useFetch('http://localhost:3003/project');
    return ( 
        <div className="recent">
            {error && (
                <div className="error">
                    <h3>{error}</h3>
                </div>
            )}
            {work && (
                <div className="con">
                    <h3 className="center">My Recent Works</h3>
                    <div className="row">
                        {work.slice(0,6).map((work) => (
                            <div className="col m4 s6">
                                <div className="card kertu" key={work.id}>
                                    <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={`./img/project/${work.gambar[0]}.png`} />
                                    </div>
                                <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{work.nama}<i className="material-icons right">more_vert</i></span>
                                <Link to = {`/project/${work.id}`}>
                                    <a><p>Details</p></a>
                                </Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{work.nama}<i className="material-icons right">close</i></span>
                                    <p>{work.details}</p>
                                    <Link to = {`/project/${work.id}`}>
                                        <button className="btn">Details</button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Recent;