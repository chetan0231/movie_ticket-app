import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{textAlign : 'center'}}>
            <h1>Movie Max</h1>
            <Link to="/book" style={{textDecoration : 'none'}}>
                <Button variant="contained">Book Now</Button>
            </Link>
        </div>
    )
}
