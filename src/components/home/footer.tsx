import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import loader from '../../assets/loader.svg'
export default function Footer() {
    const active = () => { 
        return (
            <div className='flex gap-[10px] justify-center items-center  h-[30px] bg-green-100 rounded-md'>
                <DoneIcon sx={{width:'15px', height:'15px',color:'#028849'}} />
                <p className='text-[#028849] text-[14px]'>Active</p>
            </div>
        )
    }
    const pending = () => { 
        return (
            <div className='flex gap-[10px] justify-center items-center h-[30px] bg-gray-100 rounded-md'>
                <img src={loader} style={{ width: '15px', height: '15px' }} alt={'loading'} />
                <p className='text-gray-700 text-[14px]'>Pending</p>
            </div>
        )
    }
    const removed = () => { 
        return (
            <div className='flex gap-[10px] justify-center items-center h-[30px] px-[10px] bg-red-100 rounded-md'>
                <CloseIcon sx={{width:'15px', height:'15px',color:'red'}} />
                <p className='text-red-300 text-[14px]'>Removed</p>
            </div>
        )
    }

    const rows = [
        { id: 'R6572', name: "John daniel", event: "Rave festival",noOfTickets:2, totalPrice:'$400',date:'Aug 9, 2024 11:57 pm', status:active() },
        { id: 'E6789', name: "Amaka Eze", event: "The experience",noOfTickets:3, totalPrice:'$500',date:'May 2, 2024 9:37 pm', status:removed()},
        { id: 'T5674', name: "Joseph Mary", event: "Tech Hub",noOfTickets:1, totalPrice:'N3,500',date:'Dec 10, 2024 8:00 pm', status:active() },
        { id: 'H2678', name: "Esther Obi", event: "Hackathon",noOfTickets:4, totalPrice:'N10,000',date:'Dec 10, 2024 8:00 pm', status:pending() },
        { id: 'C1672', name: "James jr", event: "Christmass carol event",noOfTickets:4, totalPrice:'N5,000',date:'June 23, 2025 1:59 pm', status:active() },
    ];
    return (
        <div className={'flex flex-col border-[1px] border-[#4D0916] px-[10px] bg-white rounded-md mt-[10px] gap-[7px] py-[10px]'}>
            <section className='flex justify-between items-cemter pr-[7px] py-[7px]'>
                <p className={'text-[15px] md:text-[17px] font-[600] '}>
                    Recent tickets purchased
                </p>
                <p className={'text-[13px] md:text-[17px] hover:cursor-pointer text-[#4D0916] underline'}>view all</p>
            </section>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{background:'#EAECF0'}}>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>Ticket ID</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>Name</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>Event</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>No of tickets</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>total price</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>Date purchased</TableCell>
                            <TableCell sx={{whiteSpace:'nowrap',padding: "7px"}}>status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{padding: "10px"}}>{ row.id}</TableCell>
                                <TableCell sx={{padding: "10px"}}>{row.name}</TableCell>
                                <TableCell sx={{padding: "10px"}}>{row.event}</TableCell>
                                <TableCell  sx={{padding: "10px"}}>{row.noOfTickets}</TableCell>
                                <TableCell  sx={{padding: "10px"}}>{row.totalPrice}</TableCell>
                                <TableCell  sx={{padding: "10px"}}>{row.date}</TableCell>
                                <TableCell  sx={{padding: "10px"}}>{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}