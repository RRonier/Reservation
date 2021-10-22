import React, { useState } from 'react'
import Hotel from 'components/Restorant'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import CustomDatePicker from 'components/CustomDatePicker'
import CustomTimePicker from 'components/CustomTimePicker'
import CustomSelect from 'components/CustomSelect'
import { Button } from "@mui/material"
import { Reservations } from 'utils/Reservations'

interface IProps {
    selectTable: any
}
const FirstStepPage = ({ selectTable }: IProps) => {
    const [findTable, setFindTable] = useState<boolean>(false)

    return (
        <>
            <section>
                <h1>Lil MonSTARS Breakfast Buffet and Donut Making!</h1>
                <Hotel name="Hard Rock Cafe - Key West" rating={4} chain="Americana" />
            </section>
            <section style={{ margin: '15px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AddLocationOutlinedIcon />
                    <address>
                        313 Duval St, Key West, FL
                    </address>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MonetizationOnOutlinedIcon />
                    <p style={{ margin: '0', padding: '0' }}>
                        USD 19.99 por persona
                    </p>
                </div>
            </section>
            <section style={{ display: 'flex' }}>
                <CustomDatePicker />
                <CustomTimePicker />
                <CustomSelect />
            </section>
            <div style={{ display: 'grid', marginTop: '10px' }}>
                {/* I set the state handler function directly in the because it's just a simple example, 
                        otherwise I'd created a function to handle that and in the onClick event I just call the function name */}
                <Button variant="contained" size="large" onClick={() => setFindTable(true)}>Buscar una mesa</Button>
            </div>
            {
                findTable && <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', columnGap: '10px', rowGap: '10px', marginTop: '20px' }}>
                    {
                        Reservations.map(({ time, isReserved }) => (
                            <Button variant="contained" color="error" disabled={isReserved} onClick={selectTable}>{time}</Button>
                        ))
                    }
                </section>
            }
            <section style={{ width: "700px" }}>
                <p><b>Acerca de la experiencia</b></p>
                <p >Join us as we celebrate your Lil MonSTARS with a hearty breakfast buffet & our famous donut making corner for the kids! Adults $10.95, add unlimited mimosas for $15 per adult. Drinks not included in buffet prices. Make reservations early, seating is limited! Costumes encouraged...</p>
                <p><b>Complementos disponibles</b></p>
                <ul>
                    <li>Unlimited mimosas (21 and older)</li>
                    <li>Lil MonSTARS breakfast buffet (10 and under)</li>
                </ul>
            </section>
        </>
    )
}

export default FirstStepPage