import React from 'react'
import Rating from '@mui/material/Rating'
import HotelPicture from "assets/small.jpg"
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import restorantStyles from "./Restorant.module.css"

interface IProps {
    name: string,
    rating?: number,
    chain?: string
}

const Restorant = ({ name, rating, chain }: IProps) => {
    const {
        restorantContainer,
        restorantPicture,
        itemsContainer,
        iconItem,
        ratingContainer,
        ratingText,
        itemsRow,
        iconContainer
    } = restorantStyles

    return (
        <div className={restorantContainer}>
            <img src={HotelPicture} alt="Americana Hotel Preview" className={restorantPicture} />
            <div className={itemsContainer}>
                {name}
                {rating ?
                    <div className={ratingContainer}>
                        <Rating value={rating} /><p className={ratingText}>251 reseñas</p>
                    </div>
                    :
                    <div className={itemsRow}>
                        <div className={iconContainer}>
                            <DinnerDiningOutlinedIcon className={iconItem} />Dom, 31 de oct.
                        </div>
                        <div className={iconContainer}>
                            <AccessTimeIcon className={iconItem} /> 10:00
                        </div>
                        <div className={iconContainer}>
                            <PersonOutlineOutlinedIcon className={iconItem} /> 2 persons
                        </div>
                    </div>
                }
                {chain}
            </div>
        </div>
    )
}

export default Restorant