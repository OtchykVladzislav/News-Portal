import {React,useEffect, useState} from 'react';
import MySelect from './components/UI/MySelect/MySelect';
import MyButton from './components/UI/MyBut/MyButton';
import MyBlock from './components/UI/MyBlock/MyBlock';
import PostGraphic from './components/Api/PostGraphic';


const RatesForm = () =>{

    const [value, setValue] = useState([])
    const [res, setRes] = useState([])
    const [сurrency, setCurrency] = useState([])

    async function onFetching() {
        const data = await PostGraphic.getAll('https://www.nbrb.by/api/exrates/rates?periodicity=0')
        setRes(data)
    }
    
    function Sort(){
        res.forEach(element => {
            
        });
    }


    useEffect(() => {
        onFetching()
        Sort()
    }, [])



    return(
        <div>
            <MySelect 
                value={value}
                onChange={event => setValue(event.target.value)}
                defaultValue = "Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}/>

            <MyButton></MyButton>
            <MyBlock/>
        </div>
    )
}

export default RatesForm;