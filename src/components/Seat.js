import React,{ useState }from 'react'
import '../css/Seat.css'
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import { InputLabel, TextField } from '@mui/material';


// program to create a two dimensional array

function twoDimensionArray(a, b) {
    let arr = [];
    let ticketPrice = 100
    // let id = Math.floor(Math.random() * 1000)
    let num = 1

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = {id : Math.floor(Math.random() * 1000) ,seat_no : num,price : ticketPrice,booked : false,disabled : false};
            num++
        }
        ticketPrice = ticketPrice + 10
    }
    return arr;
}

const x = 9; //rows  
const y = 15;  //columns

export default function Seat(props) {
    const [seats,setSeats] = useState(twoDimensionArray(x,y))
    const [color, setColor] = useState('')
    const [totalPrice,setTotalPrice] = useState(0)
    const [data,setData]=useState({
        total : 0,
        nseats : 0,
        allSeats : []
    })
    // let summary = {
    //     total : 0,
    //     nseats : 0,
    //     allSeats : []
    // }
    const [flag,setFlag] =useState(false)


    const handleClick = (e,i) => {
        setFlag(true)
        e.target.style.backgroundColor = 'red'
        const newSeats = seats.map(item => {   return item.map(ele => {
            if(ele.id === i.id){
                return {...ele,booked : true}
            }
            return ele
        })})
        newSeats.forEach(item => { item.forEach(ele => {
            if(ele.booked === true){
                setData({
                    total : data.total+ ele.price,
                nseats : data.nseats+ 1,
                allSeats : [...data.allSeats,ele.seat_no]
                })
            }
        })})
        setSeats(newSeats)
     
        console.log(newSeats,'new')
        console.log(e,i.id,"total : ",data.total,"Total seats : ",data.nseats,data.allSeats)

    }

    console.log(seats,flag)
    return (
                <div>
                    {seats.map((item,x) => {
                        const divs = item.map((i,y) => <div className="seat-style" style={{backgroundColor : color}} key={y} onClick={(e) => handleClick(e,i)}>{i.seat_no}<WeekendOutlinedIcon fontSize="large"/></div>)
                        return <div key={x} className="row-end">{divs}</div>
                    })}
                    <div style={{marginTop : '100px',textAlign : 'center'}}>
                        {flag && <div>
                            <div style={{float : 'left'}}>
                        <InputLabel><h4>Total Seats</h4></InputLabel>
                        <TextField id="outlined-basic" value={data.nseats} variant="outlined" /></div>
                        <div>
                        <InputLabel><h4>Total price</h4></InputLabel>
                        <TextField id="outlined-basic" value={data.total} variant="outlined" /></div>
                        </div>}
                    </div>
                </div>
    )
}
