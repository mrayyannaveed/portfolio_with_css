import Image from "next/image"
function ProjectBox(prop:any){
    return(
        <div>
            <section className="bg-teal-300 w-[70%] m-auto h-96 flex rounded-2xl">
                <div className="w-1/2 bg-purple-20 h-[100%] content-center">
                <h1 className="text-center text-xl font-bold">{prop.head}</h1>
                </div>
                <div className="w-1/2 bg-yellow-20">
                <Image className="h-full w-full"  src={prop.image} alt={prop.alt}></Image>
                </div>
            </section>
        </div>
    )
}
export default ProjectBox