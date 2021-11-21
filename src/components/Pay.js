import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Pay(props) {
    return (
        <div style={{textAlign : 'center'}}>
            <h1>Tickets has been booked successfully...</h1>
            <Link to="/" style={{textDecoration : 'none'}}>
                <Button variant="contained">Go To HomePage</Button>
            </Link>
        </div>
    )
}
