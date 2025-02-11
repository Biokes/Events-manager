import Footer from "./footer";
import AnalyticsIcon from '../../icons/analyticsIcon'
import CalendarIcon from '../../icons/calendarIcon'
import HomeIcon from '../../icons/homeIcon'
import LogoutIcon from '../../icons/logoutIcon'
import SettingsIcon from '../../icons/settingsIcon'
import TicketIcon from '../../icons/ticketIcon'
import { useState } from 'react';
import moneyIcon from "../../assets/moneyIcon.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Chart from "./chart";
import styles from '../../App.module.css'

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState<string>("dashboard");

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

    const upcomingEvents = [
        {
            image: 'https://res.cloudinary.com/depwujqik/image/upload/v1739063690/image_5_dkeknx.png',
            event: 'NeonGlow festival',
            Description: 'NeonGlow Festival is more than just a music festival—its a celebration of culture, creativity, and community. As our flagship annual event. NeonGlow Festival brings the spirit and vision...',
            time: '24 Jul 2025, 5:20 AM',
            price: 'N5000'
        },
        {
            image: 'https://res.cloudinary.com/depwujqik/image/upload/v1739063690/image_6_ypt1ad.png',
            event: 'rave festival',
            Description: 'NeonGlow Festival is more than just a music festival—its a celebration of culture, creativity, and community. As our flagship annual event. NeonGlow Festival brings the spirit and vision...',
            time: '24 Jul 2025, 5:20 AM',
            price: '$200'
        }
    ]

    return (
        <div className={'flex min-h-[100%] bg-gray-200 justify-center '}>
            <div className='hidden md:w-[24vw] lg:w-[260px] bg-white border-r-[1px] border-gray-200 lg:flex flex-col justify-between md:pb-[1.5%] sm:pl-[10px]'>
                <div className={'flex flex-col justify-between items-center py-[16px] gap-[15px] px-[5px] lg:px-0'}>
                    {
                        rightBarList[0].map((data) => (
                            <div key={data.text} className={`rounded-sm w-full md:w-[90%] lg:w-[85%]  flex hover:cursor-pointer justify-start items-center gap-[5px] lg:gap-[10px] py-[5px] pl-[10px] 
                                                ${currentIndex === data.text ? 'bg-red-100 font-[500]' : ''}`} onClick={() => { toggle(data.text) }}>
                                {data.icon(currentIndex === data.text ? color[1] : color[0])}
                                <p className={`capitalize md:text-[10px] text-[8px] lg:text-[15px] text-nowrap truncate ${data.text === currentIndex ? 'text-red-900' : 'text-black'}`}>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={'flex flex-col justify-between items-center py-[10px] gap-[16px]'}>
                    {
                        rightBarList[1].map((data) => (
                            <div key={data.text} className={`rounded-sm w-[80%] flex justify-start hover:cursor-pointer items-center gap-[10px] text-[15px] py-[5px] pl-[10px] 
                    ${currentIndex === data.text ? 'bg-red-100 font-[500]' : ''}`} onClick={() => { toggle(data.text) }}>
                                {data.icon(currentIndex === data.text ? color[1] : color[0])}
                                <p className={`capitalize text-[10px] md:text-[9px] lg:text-[15px] ${data.text === currentIndex ? 'text-red-900' : 'text-black'}`}>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={`bg-gray-200 flex flex-col w-[97%] sm:w-[81%] lg:w-full p-[11px] sm:gap-[20px] lg:gap-[10px] h-full sm:pt-[20px] ${styles.ipad}`} >
                <div className={'flex justify-between md:px-[20px]'}>
                    <div>
                        <p style={{ fontFamily: 'Noto Sans' }} className={'font-[600] capitalize text-[17px] lg:text-[20px] lg:h-[px]'}>welcome Izik</p>
                        <p style={{ fontFamily: 'Noto Sans' }} className={'font-[400] text-[8px] sm:text-[13px] lg:text-[16px] h-[24px]'}>
                            Create, track and manage your event</p>
                    </div>
                    <button className={'bg-[#4D0916] text-white font-[600] px-[10px] md:px-0 w-[100px ] md:w-[150px] text-[10px] flex justify-center items-center lg:w-[170px] h-[30px] lg:h-[35px] sm:text-[14px]  capitalize'}>create event</button>
                </div>
                <div className={styles.ipadPack}>
                    <div className={'w-full flex flex-col lg:flex-row lg:justify-around items-center lg:h-[300px] gap-[15px] lg:gap-0'}>
                        <div className='bg-white lg:w-[53%] p-[10px] border-[1px] border-[#4D0916] rounded-md'>
                            <section className='flex justify-between items-cemter pr-[7px]'>
                                <p className={'text-[10px] md:text-[14px] capitalize font-[600] '}>
                                    upcoming events
                                </p>
                                <p className={'text-[10px] md:text-[13px] hover:cursor-pointer text-[#4D0916] underline'}>view all</p>
                            </section>
                            <div className={'flex flex-col gap-[7px] lg:gap-[5px]'}>
                                {
                                    upcomingEvents.map((data, index) => (
                                        <div key={index} className={'border-[1px] border-gray-200 gap-[4px] h-[70px] sm:h-[80px] md:h-[100px] rounded-md flex'}>
                                            <img src={data.image} className={'h-full w-[25%] sm:w-[25%] rounded-md'} alt="event picture" />
                                            <section className={'w-full px-[5px] sm:pt-[5px] justify-around flex flex-col'}>
                                                <section className={'flex justify-between items-center h-[24px] w-full pr-[5px]'}>
                                                    <p className={'capitalize font-[600] text-[10px] sm:text-[13px] md:text-[15px]'} style={{ fontFamily: 'Noto Sans' }}>
                                                        {data.event}
                                                    </p>
                                                    <p className={'text-[8px] text-[#4D0916] md:text-[12px] hover:cursor-pointer underline'}>
                                                        view more
                                                    </p>
                                                </section>
                                                <p className={'line-clamp-2 text-[8px] md:text-[12px]'}>
                                                    {data.Description}
                                                </p>
                                                <section className='w-full justify-between flex pr-[5px]'>
                                                    <p className={'text-[8px] md:text-[12px] font-[550]'} style={{ fontFamily: 'Noto Sans' }}>{data.time}</p>
                                                    <p className={'text-[8px] md:text-[12px] font-[550]'} style={{ fontFamily: 'Noto Sans' }}>{data.price}</p>
                                                </section>
                                            </section>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={'lg:w-[45%] w-full bg-white rounded-md border-[1px] border-[#4D0916] rounded-md'}>
                            <div className={' w-full p-[7px_13px] gap-[10px]'}>
                                <header className={'h-[20px] flex justify-between'}>
                                    <div className='flex gap-[4px] justify-center items-center'>
                                        <img src={moneyIcon} className={'w-[16px] h-[16px]'} alt="" />
                                        <p className='text-[15px] h-[15px] -mt-[4px]'>Revenue insight</p>
                                    </div>
                                    <div className='rounded-md flex justify-around items-center h-[30px] border-[1px] border-gray-100 cursor-pointer'>
                                        <KeyboardArrowLeftIcon />
                                        <p>2024</p>
                                        <KeyboardArrowRightIcon />
                                    </div>
                                </header>
                                <div className={'flex justify-start items-center w-full gap-[5px]'}>
                                    <div className='w-[70px] h-[30px] gap-[8px] flex justify-center items-center '>
                                        <p className={'w-[10px] h-[10px] rounded-[50%] bg-[#4D0916]'}></p>
                                        <p className={'font-[400] text-[14px] h-[20px] -ml-[5px]'} style={{ fontFamily: 'Noto sans' }}>Revenue</p>
                                    </div>
                                    <div className='w-auto h-[20px] gap-[8px] flex justify-center items-center '>
                                        <p className={'w-[8px] h-[10px] rounded-[50%] bg-[#E91B41]'}></p>
                                        <p className={'font-[400] text-[14px] h-[20px] text-nowrap'} style={{ fontFamily: 'Noto sans' }}>Ticket sales</p>
                                    </div>
                                </div>
                            </div>
                            <Chart />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>

    )
}