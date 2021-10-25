import React from 'react'
import {
    Restorant,
    ReservationForm
} from 'components'

interface IProps {
    handleNext(): void;
}
const SecondStepPage = ({ handleNext }: IProps) => {

    return (
        <>
            <p><b>You're almost done!</b></p>
            <Restorant name="Hard Rock Cafe - Key West" />
            <section>
                <p><b>¿What you should know before you go?</b></p>
                <p>Restorant information</p>
                <p>Hard Rock properties have operated by working closely with safety and health agencies to align with local, <br />
                    state, federal and blobal public health guidelines in response to CODIV-19. We take the health and safety of <br />
                    our team and gests extremely seriously. In compliance with recomendations from local health officials, we are <br />
                    beggining to re-open Hard Rock Cafes and have implemented safety & hygiene policies to keep you safe.
                </p>
            </section>
            <section>
                <p>Dinner details</p>
                <ReservationForm handleNext={handleNext} />
            </section>
        </>
    )
}

export default SecondStepPage