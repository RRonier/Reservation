import React from 'react'
import Rating from '@mui/material/Rating'
import HotelPicture from "assets/small.jpg"
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

interface IProps {
    name: string,
    rating?: number,
    chain?: string
}

const Restorant = ({ name, rating, chain }: IProps) => (
    <div style={{ display: 'flex', height: '70px' }}>
        <img src={HotelPicture} alt="Americana Hotel Preview" style={{ borderRadius: '10%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
            {name}
            {rating ?
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={rating} /><p style={{ padding: '0', margin: '0' }}>251 reseñas</p>
                </div>
                :
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0 20px 0 0' }}>
                        <DinnerDiningOutlinedIcon style={{ marginRight: '5px' }} />Dom, 31 de oct.
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0 20px 0 0' }}>
                        <AccessTimeIcon style={{ marginRight: '5px' }} /> 10:00
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0 20px 0 0' }}>
                        <PersonOutlineOutlinedIcon style={{ marginRight: '5px' }} /> 2 persons
                    </div>
                </div>
            }
            {chain}
        </div>
    </div>
)

export default Restorant