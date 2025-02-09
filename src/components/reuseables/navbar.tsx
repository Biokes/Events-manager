import stylesheet from '../../index.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {
    return (
        <div className={stylesheet.navbar}>
            <img src={""} alt={"logo"} className={stylesheet.logo}/>
            <section>
                <img src={"https://res.cloudinary.com/depwujqik/image/upload/v1739063689/Ellipse_3227_xs5kwh.png"} alt="profile picture"/>
                <p className={stylesheet.name}>izik hilfilger</p>
                <KeyboardArrowDownIcon/>
            </section>
        </div>
    )
}
