import Image from "next/image"
import "./project.css"
function ProjectBox(props:any){
    return(
        <div>
            <section id="project-cont">
                <div id="project-left">
                <h1>{props.head}</h1>
                <p>{props.desc}</p>
                </div>
                <div id="project-right">
                <Image id="project-img"  src={props.image} alt={props.alt} width={500} height={500}></Image>
                </div>
            </section>
        </div>
    )
}
export default ProjectBox