import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", revenue: 10, tickets: 30 },
  { month: "Feb", revenue: 20, tickets: 45 },
  { month: "Mar", revenue: 40, tickets: 50 },
  { month: "Apr", revenue: 35, tickets: 60 },
  { month: "May", revenue: 50, tickets: 70 },
  { month: "Jun", revenue: 65, tickets: 75 },
  { month: "Jul", revenue: 110, tickets: 105 },
  { month: "Aug", revenue: 85, tickets: 90 },
  { month: "Sept", revenue: 90, tickets: 95 },
  { month: "Oct", revenue: 95, tickets: 100 },
  { month: "Nov", revenue: 100, tickets: 110 },
  { month: "Dec", revenue: 110, tickets: 120 },
];

export default function Chart(){
  return (
      <ResponsiveContainer width="100%" height={180} >
        <LineChart data={data} margin={{ top: 0, right: 30, left: -25, bottom: 5 }}>
          <CartesianGrid strokeDasharray="1 10" />
        <XAxis dataKey="month" tick={{fontSize:7,fontWeight:'400'}} />
          <YAxis dataKey={""} tick={{fontSize:8,fontWeight:'400'}}   tickFormatter={(month) => {if (typeof month !== "string") {
          return String(month)
        }
    return month.charAt(0).toUpperCase() + month.slice(1);
  }}/>
        <Tooltip
          contentStyle={{ background: "linear-gradient(to bottom,rgb(250, 229, 233) 1%,rgb(253, 247, 247),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255))", borderRadius: "8px", border: "1px solid #ccc", padding: "10px",width:'150px'}}
          itemStyle={{ color: "#4A0D23", fontSize: "12px", fontWeight: "thin",textTransform:'capitalize' }}
          labelStyle={{ fontSize: "14px", fontWeight: "600", color: "#E5004F" }} />
          <Legend fontSize={'7px'} fontWeight={"400"}/>
          <Line type="monotone" dataKey="revenue" stroke="#4A0D23" strokeWidth={1} dot={{ r: 0 }} />
          <Line type="monotone" dataKey="tickets" stroke="#E5004F" strokeWidth={1} dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
  );
};