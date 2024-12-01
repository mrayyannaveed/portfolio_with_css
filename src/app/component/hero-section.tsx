import Image from "next/image"
import rayyan from "../../../public/rayyan.png"
import Link from "next/link"
const Hero = () => {
    return(
        <div>
            <div className="flex justify-around min-h-[60vh] items-center">
                <section className="w-1/3">
                <h1 className="w-9/12 text-4xl font-bold">Hello, my name is Muhammad Rayyan</h1>
                <p className="text-lg w-9/12 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi alias temporibus, minima id, libero sed sint ipsa, magni repellat eius voluptatibus dolorum.</p>
                <button className="bg-yellow-500 px-4 py-2 hover:bg-yellow-300 rounded-lg font-bold">
                    <Link href="https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/" target="blank">LinkedIn</Link>
                    </button>
                </section>
                <div className="">
            <Image className="w-72 h-72 rounded-full object-cover" src={rayyan} alt="Rayyan Naveed"></Image>
            </div>
            </div>
        </div>
    )
}

export default Hero 