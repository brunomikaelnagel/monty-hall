"use client"

// imports React
import { useRef } from "react"

// Componentes nextjs
import Link from "next/link"

// Componentes
import MontyHallDoorList from "../../../../components/MontyHallDoorList"

// CSS
import styles from "./page_monty_hall.module.css"

interface IMontyHallProps {
    quantDoors: string
    awardWinningDoorNumber: string
}

function useMontyHall( props: IMontyHallProps ){
    const quantDoorsRef = useRef(parseInt(props.quantDoors))
    const awardWinningDoorNumberRef = useRef(parseInt(props.awardWinningDoorNumber))

    return{
        quantDoorsRef,
        awardWinningDoorNumberRef
    }
}

export default function MontyHall( { params }: { params: IMontyHallProps} ){

    const { quantDoorsRef, awardWinningDoorNumberRef } = useMontyHall(params)

    return(
        <div className={styles.container}>
            <MontyHallDoorList quantDoors={quantDoorsRef.current} awardWinningDoorNumber={awardWinningDoorNumberRef.current} />
            <Link className={styles.restart_button} href={"/"} >
                Reiniciar
            </Link>
        </div>
    )
}