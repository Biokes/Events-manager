import Navbar from "../reuseables/navbar";
import Hero from "./rightbar";

export default function Home() {
    return (
        <div className='bg-white w-full min-h-screen'>
            <Navbar />
            <Hero />
        </div>
    )
}
