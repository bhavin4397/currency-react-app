import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const Barchart = (props) => {


    const { CAD, CNY, INR, AED, GBP } = props.list
    const currData = [CAD, CNY, INR, AED, GBP]
    
    const currName = ["Canada(CAD)", "China(CNY)", "India(INR)", "UAE(AED)", "Switzerland(GBP)"]



    return (
        <>
        <button className="btn btn-primary" onClick={props.onLogoutHandler}>Logout</button>
            <Chart
                type='bar'
                min-width={425}
                min-height={425}
                series={[
                    { data: currData }
                ]}
                options={
                    {
                        title: {
                            text: "Top five Counteries Exchange Rate",
                            style: { fontSize: 30 }
                        },
                        xaxis: {
                            categories: currName,
                            labels: { style: { fontSize: 14, fontWeight: "bold" } },
                            title: {
                                text: "Currency Comparing to USD",
                                style: { fontSize: 30 }
                            }
                        },
                        yaxis: {
                            labels: {
                                formatter: (val) => { return (val.toFixed(2)) },
                                style: { fontSize: 14, fontWeight: 'bold' }
                            },
                            title: {
                                text: "$ ONE DOLLAR",
                                style: { fontSize: 20 }
                            }
                        },
                        dataLabels: {
                            formatter: (val) => { return (val.toFixed(2)) },
                            style: { colors: ["#000000"] }
                        }

                    }
                }
            />
        </>


    )
}

export default Barchart;