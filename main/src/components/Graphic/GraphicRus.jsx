import {React, useState, useEffect} from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import PostOnline from '../PostOnline/PostOnline';

const GraphicRus  = () =>{
    const [data, setData] = useState([])

    async function onFetching() {
        const data = await PostOnline.getAll('https://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30')
        setData(data)
    }
    
    useEffect(() => {
        onFetching()
    }, [])

    return(
        <div>
            <h1>Получение динамики официального курса белорусского рубля(10 бел. рублей) по отношению к рос.рублю за июнь - июль 2016 года</h1>
            <AreaChart width={1700} height={150} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} xAxisId={280}>
                <CartesianGrid strokeDasharray="7 7" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area dataKey="Cur_OfficialRate" stroke="#8884d8" fill="#8884d8"/>
            </AreaChart>
        </div>
    )
}

export default GraphicRus;