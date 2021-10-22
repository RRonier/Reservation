import * as React from 'react'
import Rating from '@mui/material/Rating'
import HotelPicture from "assets/small.jpg"

interface IProps {
    name: string,
    rating: number,
    chain: string
}

const Hotel = ({ name, rating, chain }: IProps) => (
    <div style={{ display: 'flex', height: '70px' }}>
        <img src={HotelPicture} alt="Americana Hotel Preview" style={{ borderRadius: '10%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
            {name}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={rating} /><p style={{ padding: '0', margin: '0' }}>251 reseñas</p>
            </div>
            {chain}
        </div>
    </div>
)

export default Hotel