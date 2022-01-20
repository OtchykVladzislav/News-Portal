import {React,useEffect, useState} from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend, LabelList} from 'recharts';
import PostOnline from '../PostOnline/PostOnline';


const GraphicAll = () => {

    const [data, setData] = useState([])

    async function onFetching() {
        const data = await PostOnline.getAll('https://www.nbrb.by/api/exrates/rates?periodicity=0')
        setData(data)
    }
    
    useEffect(() => {
        onFetching()
    }, [])


    return(
        <div>
            <h1>Получение официального курса белорусского рубля по отношению к иностранным валютам, устанавливаемого ежедневно</h1>
            <BarChart width={1700} height={400} data={data}>
                <CartesianGrid/>
                <XAxis dataKey="Cur_Name"/>
                <Tooltip/>
                <Legend width={150} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <YAxis label={{ value: 'Курс к бел. рублю', angle: -90, position: 'Left'}}/>
                <Bar dataKey="Cur_OfficialRate" stroke="#82ca9d">
                    <LabelList dataKey="Cur_Scale" position="top"/>
                </Bar>
            </BarChart>
        </div>
    )
}

export default GraphicAll;