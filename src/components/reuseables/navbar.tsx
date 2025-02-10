import { useState , useRef,useEffect} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AnalyticsIcon from '../../icons/analyticsIcon'
import CalendarIcon from '../../icons/calendarIcon'
import HomeIcon from '../../icons/homeIcon'
import LogoutIcon from '../../icons/logoutIcon'
import SettingsIcon from '../../icons/settingsIcon'
import TicketIcon from '../../icons/ticketIcon'

export default function Navbar() {
    const [isOpen, setOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setOpen(!isOpen)
    }
    const [currentIndex, setCurrentIndex] = useState<string>("dashboard");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggle = (index: string) => {
        setCurrentIndex(index)
    }
    const color = ['black', '#4D0916']
    const rightBarList = [
        [
            { text: "dashboard", icon: (color: string) => <HomeIcon color={color} /> }, { text: "event", icon: (color: string) => <CalendarIcon color={color} /> },
            { text: "ticket & reservation", icon: (color: string) => <TicketIcon color={color} /> },
            { text: "visitor analytics", icon: (color: string) => <AnalyticsIcon color={color} /> }],
        [
            { text: 'settings', icon: (color: string) => <SettingsIcon color={color} /> },
            { text: 'logout', icon: (color: string) => <LogoutIcon color={color} /> }
        ]
    ]

    return (
        <div className={"flex felx-col justify-between items-center h-[40px] md:h-[60px] lg:h-[70px] w-[100%] px-[30px] md:px-[5%] border-b-[1px] border-gray-100 bg-white"}>
            <img src={"https://res.cloudinary.com/depwujqik/image/upload/v1739063688/Group_me54ta.png"} alt={"logo"} className={"h-[25px] md:h-[35px] "} />
            <section className={"lg:flex gap-[5px] justify-center items-center hidden"}>
                <img src={"https://res.cloudinary.com/depwujqik/image/upload/v1739067568/3a8bdf19c7b4f7e27422dcf2c356ae9e_pzcvqj.png"} className={"h-[30px] rounded-[50%]"} alt="profile picture" />
                <div className={"hidden md:flex gap-[4px] justify-center items-center"}>
                    <p className={"capitalize text-black font-[500] text-[15px]"} style={{ fontFamily: 'Noto sans' }}>izik hilfilger</p>
                    <KeyboardArrowDownIcon sx={{
                        width: '15px',
                        height: '25px',
                        top: '4.45px',
                        left: '2.55px',
                        color: 'black',
                        paddingTop: '1%'
                    }} />
                </div>
            </section>
            <div className='flex lg:hidden' onClick={toggleMenu}>
                <MenuIcon sx={{ color: '#4D0916' }} />
            </div>
              <div
                ref={menuRef}
                className={`fixed top-0 left-0 z-40 h-full w-[250px] bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full justify-between py-4">
                    <div className="flex flex-col gap-3 px-4">
                        {rightBarList[0].map((data) => (
                            <div
                                key={data.text}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:cursor-pointer ${
                                    currentIndex === data.text ? "bg-red-100 font-medium" : ""
                                }`}
                                onClick={() => toggle(data.text)}
                            >
                                {data.icon(currentIndex === data.text ? color[1] : color[0])}
                                <p className={`capitalize text-sm ${currentIndex === data.text ? "text-red-900" : "text-black"}`}>
                                    {data.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 px-4 ">
                        {rightBarList[1].map((data) => (
                            <div
                                key={data.text}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:cursor-pointer ${
                                    currentIndex === data.text ? "bg-red-100 font-medium" : ""
                                }`}
                                onClick={() => toggle(data.text)}
                            >
                                {data.icon(currentIndex === data.text ? color[1] : color[0])}
                                <p className={`capitalize text-sm ${currentIndex === data.text ? "text-red-900" : "text-black"}`}>
                                    {data.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && <div className="fixed inset-0 bg-black opacity-15 z-10" onClick={() => setOpen(false)}></div>}
        </div>
    )
}
