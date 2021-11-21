import React from 'react'
import Seat from './Seat'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import '../css/Seatselection.css'
import { Link } from 'react-router-dom'

const style = {
    spanProps : {
        marginRight : '10px'
    }
}

const handleConfirm = () => {

}

export default function SeatSelection() {
    return (
        <div>
            <Box component="div">
                <div style={{textAlign : 'center'}}>
                    <h1>Book Your Seat Now</h1>
                    <div style={{marginTop : '10px',marginBottom : '40px'}}>
                        <span style={style.spanProps}><span className="span-circle"></span>Selected</span>
                        <span style={style.spanProps}><span className="span-circle" style={{backgroundColor : '#cc0000'}}></span>Booked</span>
                        <span><span className="span-circle" style={{backgroundColor : '#bfbfbf'}}></span>Available</span>
                    </div>
                </div>
                <div style={{display : 'flex',justifyContent : 'center' ,margin : 'auto', width : '80%'}}>
                    <Seat/>
                </div>
            </Box>
            <Box component="div" sx={{clear : 'both',textAlign : 'center',marginTop : '30px'}}>
                <Link to='/pay' style={{textDecoration : 'none'}}>
                <Button className="myButton" variant="contained">Confirm</Button>
                </Link>
            </Box>
            
        </div>
    )
}
