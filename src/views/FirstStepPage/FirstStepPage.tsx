import React, { useState } from 'react'
import {
    Restorant,
    CustomDatePicker,
    CustomTimePicker,
    CustomSelect
} from 'components'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import { Button } from "@mui/material"
import { Reservations } from 'utils/Reservations'
import pageStyles from "./FirstStepPage.module.css"

interface IProps {
    selectTable(): void
}
const FirstStepPage = ({ selectTable }: IProps) => {
    const [findTable, setFindTable] = useState<boolean>(false)
    const {
        dateInputContainer,
        buttonContainer,
        availableReservations,
        aboutSection,
        restorantInfo,
        iconContainer,
        restorantPrice
    } = pageStyles
    return (
        <>
            <section>
                <p><b>Lil MonSTARS Breakfast Buffet and Donut Making!</b></p>
                <Restorant name="Hard Rock Cafe - Key West" rating={4} chain="Americana" />
            </section>
            <section className={restorantInfo}>
                <div className={iconContainer}>
                    <AddLocationOutlinedIcon />
                    <address>
                        313 Duval St, Key West, FL
                    </address>
                </div>
                <div className={iconContainer}>
                    <MonetizationOnOutlinedIcon />
                    <p className={restorantPrice}>
                        USD 19.99 per person
                    </p>
                </div>
            </section>
            <section className={dateInputContainer}>
                <CustomDatePicker />
                <CustomTimePicker />
                <CustomSelect />
            </section>
            <div className={buttonContainer}>
                {/* I set the state handler function directly in the because it's just a simple example, 
                        otherwise I'd created a function to handle that and in the onClick event I just call the function name */}
                <Button variant="contained" onClick={() => setFindTable(true)}>Find a table</Button>
            </div>
            {
                findTable && <section className={availableReservations}>
                    {
                        Reservations.map(({ time, isReserved }) => (
                            <Button
                                variant="contained"
                                color="error"
                                disabled={isReserved}
                                onClick={selectTable}
                            >{time}</Button>
                        ))
                    }
                </section>
            }
            <section className={aboutSection}>
                <p><b>About the experience</b></p>
                <p >Join us as we celebrate your Lil MonSTARS with a hearty breakfast buffet & our famous donut making corner for the kids! Adults $10.95, add unlimited mimosas for $15 per adult. Drinks not included in buffet prices. Make reservations early, seating is limited! Costumes encouraged...</p>
                <p><b>Available complements</b></p>
                <ul>
                    <li>Unlimited mimosas (21 and older)</li>
                    <li>Lil MonSTARS breakfast buffet (10 and under)</li>
                </ul>
            </section>
        </>
    )
}

export default FirstStepPage