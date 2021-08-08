import Sidebar from "./Sidebar";
import useFetch from "./UseFetch";
import Footer from "./Footer";
const Project = () => {

    const{data:skill, error,pending} = useFetch('http://localhost:3002/skill')

    const {data : project, error1, pending1} = useFetch('http://localhost:3003/project')
    
    return ( 
        <div className="project">
            <div className="container">
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
                {skill && (
                    <div className="me">
                        <div className="row">
                            <div className="col s12 m7">
                            <h3>Muhammad Aliif Gadri</h3>
                            <h5>Founder of PT. Strategi Kreasi Teknologi</h5>
                            <p>I'm an Information System student from Institute Technology Sepuluh Nopember. I have lots of passion for managing projects, analyzing systems, and developing businesses. I started a company with my friends hoping to learn a lot of things about the IT Industry and developing skills that I'm passionate about.</p>
                        </div>
                    <div className="col s12 offset-m1 m4">
                        <img src="../img/logo/alip.jpg" alt="" className="materialboxed  user" width = '300px' />
                    </div>
                    <div className="row">
                        <div className="col s12">
                            {project && (
                                <Sidebar webdev = {project.filter((webdev) =>(
                                    webdev.type == "Web Development"
                                ))
                                }
                                erp = {project.filter((erp) => (
                                    erp.type == "ERP Implementation"
                                ))}  
                                gamedev = {project.filter ((gamedev) => (
                                    gamedev.type == "Game Development" 
                                ))}
                                error1 = {error1} pending1 = {pending1} ></Sidebar>
                            )}
                        </div>
                    </div>
                </div>
                <div className="projectbody">
                    <h3 className='whatido'>What I Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, libero? Magnam aut, in nostrum amet perferendis debitis. Distinctio illum velit doloribus nam atque! Corporis excepturi, provident quam inventore porro ducimus doloribus voluptatum tenetur tempora harum, ea deleniti sit molestiae veritatis optio numquam accusantium, neque velit. Officia laboriosam, aut, hic quidem iste, eaque a corrupti beatae dicta est impedit fugit earum.</p>
                    <div className="row">
                        {skill.map((skill) => (
                            <div className="col m4 s6 skill" key={skill.id}>
                                <div className="gambar">
                                    <img src={`../img/skill/${skill.gambar}` }alt="" width='100px' />
                                </div>
                                <h5>{skill.nama}</h5>
                                <p>{skill.details}</p>
                                
                            </div>
                            
                        ))}
                    </div>
                </div>
                
                
                </div>
                
                )}
            </div>
            <Footer />
            
        </div>
     );
}
 
export default Project;