import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {
    return (
        <div className={"flex felx-col justify-start md:justify-between items-center h-[60px] md:h-[80px] w-[100%] px-[30px] md:px-[5%] border-b-[1px] border-gray-100"}>
            <img src={"https://res.cloudinary.com/depwujqik/image/upload/v1739063688/Group_me54ta.png"} alt={"logo"} className={"h-[30px] md:h-[45px] "} />
            <section className={"md:flex gap-[5px] justify-center items-center hidden"}>
                <img src={"https://res.cloudinary.com/depwujqik/image/upload/v1739067568/3a8bdf19c7b4f7e27422dcf2c356ae9e_pzcvqj.png"} className={"h-[45px] rounded-[50%]"} alt="profile picture" />
                <div className={"hidden md:flex gap-[4px] justify-center items-center"}>
                    <p className={"capitalize text-black font-[500] text-[14px]"} style={{fontFamily:'Noto sans'}}>izik hilfilger</p>
                    <KeyboardArrowDownIcon sx={{
                       width: '15px',
                       height: '20px',
                       top: '4.45px',
                       left: '2.55px',
                        color: 'black',
                       paddingTop:'1%'
                    }} />
                </div>
            </section>
        </div>
    )
}
