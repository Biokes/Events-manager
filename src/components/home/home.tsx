import Navbar from "../reuseables/navbar";
import Hero from "./rightbar";

export default function Home() {
    return (
        <div className='bg-white h-[100vh] w-full'>
            <Navbar />
            <Hero/>
        </div>
    )
}