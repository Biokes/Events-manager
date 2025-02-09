import AnalyticsIcon from '../../icons/analyticsIcon'
import CalendarIcon from '../../icons/calendarIcon'
import HomeIcon from '../../icons/homeIcon'
import LogoutIcon from '../../icons/logoutIcon'
import SettingsIcon from '../../icons/settingsIcon'
import TicketIcon from '../../icons/ticketIcon'
import { useState } from 'react';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState<string>("dashboard");
    
    const toggle = ( index: string ) => { 
        setCurrentIndex(index)
    }
    const color = ['black', '#4D0916']
    const rightBarList = [
        [
            { text: "dashboard", icon: (color: string) => <HomeIcon color={color} /> }, { text: "event",icon: (color: string) =>  <CalendarIcon color={color} /> },
            { text: "ticket & reservation", icon: (color: string) => <TicketIcon color={color} /> },
                { text: "visitor analytics", icon: (color: string) => <AnalyticsIcon color={color} /> }],
        [
            { text: 'settings',icon: (color: string) => <SettingsIcon color={color} /> },
            { text: 'logout',icon: (color: string) =>  <LogoutIcon color={color} /> }
        ]
    ]

    return (
        <div className='hidden md:w-[30vw] lg:w-[285px] bg-[white] lg:h-[92vh] border-r-[1px] border-gray-200 md:flex flex-col justify-between'>
            <div className={'flex flex-col justify-between items-center p-[16px] gap-[16px]'}>
            {
                rightBarList[0].map((data) => (
                    <div key={data.text} className={`rounded-sm w-[80%] flex justify-start items-center gap-[10px] text-[15px] py-[5px] pl-[10px] 
                    ${currentIndex === data.text ? 'bg-red-100 font-[500]' : ''}`} onClick={()=>{toggle(data.text)}}>
                        {data.icon(currentIndex === data.text ? color[1] : color[0])}
                        <p className={`capitalize text-[15px] ${data.text===currentIndex?'text-red-900' :'text-black'}`}>{data.text}</p>
                    </div>
                ))
            }
            </div>
            <div className={'flex flex-col justify-between items-center p-[16px] gap-[16px]'}>
                {
                rightBarList[1].map((data) => (
                    <div key={data.text} className={`rounded-sm w-[80%] flex justify-start items-center gap-[10px] text-[15px] py-[5px] pl-[10px] 
                    ${currentIndex === data.text ? 'bg-red-100 font-[500]' : ''}`} onClick={()=>{toggle(data.text)}}>
                        {data.icon(currentIndex === data.text ? color[1] : color[0])}
                        <p className={`capitalize text-[15px] ${data.text===currentIndex?'text-red-900' :'text-black'}`}>{data.text}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}