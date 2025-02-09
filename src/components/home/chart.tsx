// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LegendProps } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const Chart = () => {
//   const [opacity, setOpacity] = React.useState({
//     uv: 1,
//     pv: 1,
//   });

//   const handleMouseEnter: LegendProps['onMouseEnter'] = (o) => {
//     if (o && o.dataKey) {
//       setOpacity((prev) => ({ ...prev, [o.dataKey as keyof typeof opacity]: 0.5 }));
//     }
//   };

//   const handleMouseLeave: LegendProps['onMouseLeave'] = (o) => {
//     if (o && o.dataKey) {
//       setOpacity((prev) => ({ ...prev, [o.dataKey as keyof typeof opacity]: 1 }));
//     }
//   };

//   return (
//     <div style={{ width: '100%' }}>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
//           <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };
// export default Chart;
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
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 0, right: 35, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="1 10" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#4A0D23" strokeWidth={2} dot={{ r: 0 }} />
          <Line type="monotone" dataKey="tickets" stroke="#E5004F" strokeWidth={2} dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
  );
};