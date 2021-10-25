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
            <p><b>Ya casi has terminado!</b></p>
            <Restorant name="Hard Rock Cafe - Key West" />
            <section>
                <p><b>¿Que debes saber antes de ir?</b></p>
                <p>Una nota del restaurante</p>
                <p>Hard Rock properties have operated by working closely with safety and health agencies to align with local, <br />
                    state, federal and blobal public health guidelines in response to CODIV-19. We take the health and safety of <br />
                    our team and gests extremely seriously. In compliance with recomendations from local health officials, we are <br />
                    beggining to re-open Hard Rock Cafes and have implemented safety & hygiene policies to keep you safe.
                </p>
            </section>
            <section>
                <p>Detalles del comensal</p>
                <ReservationForm handleNext={handleNext} />
            </section>
        </>
    )
}

export default SecondStepPage