import Image from "next/image"
import rayyan from "../../../public/rayyan.png";
const About = () => {
    return(
        <div>
            <section className="flex justify-around w-[90% min-h-[60vh] items-center m-auo">
                <div className="pl-3 w-1/3">
                    <h1 className="text-4xl font-bold ">About me</h1>
                    <p className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium reprehenderit deleniti repellat ipsum.</p>
                    <button className="bg-yellow-500 px-4 py-2 hover:bg-yellow-300 font-bold rounded-lg">Resume</button>
                </div>
                <Image className="rounded-full w-72 h-72 object-cover "  src={rayyan} alt="RayyanNaveed" ></Image>
            </section>
        </div>
    )
}

export default About;