import dashboard from '../../assets/MdOutlineOtherHouses.svg'
import AnalyticsIcon from '../../icons/analyticsIcon'
import HomeIcon from '../../icons/homeIcon'
import LogoutIcon from '../../icons/logoutIcon'
import SettingsIcon from '../../icons/settingsIcon'
import TicketIcon from '../../icons/ticketIcon'
export default function Hero() {
    const rightBarList = [
        [
            { text: "dashboard", icon: <HomeIcon color={'black'} /> }, { text: "event", icon: <TicketIcon color='black' /> },
            { text: "ticket & reservation", icon: <TicketIcon color={'black'} /> }, { text: "visitor analytics", icon: <AnalyticsIcon color={"black"} /> }],
        [
            { text: 'settings', icon: <SettingsIcon color={'black'} /> },
            { text: 'logout', icon: <LogoutIcon color={'black'} /> }
        ]
    ]
    return (
        <div className='md:[30vw] lg:w-[285px] bg-[#D0D5DD] h-full'>
            {
                rightBarList[0].map((data, index) => (
                    <div key={index}>
                        {data.icon}
                    </div>
                ))
            }
        </div>
    )
}