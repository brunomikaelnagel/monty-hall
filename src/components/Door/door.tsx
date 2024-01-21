// React
import { Dispatch, MouseEvent, SetStateAction, useState } from "react"

// Componetes
import Award from "../Award"

// CSS
import style from "./door.module.css"

interface IDoorProps {
    number: number
    award?: boolean
    selectedDoorNumber: number
    setSelectedDoor: Dispatch<SetStateAction<number>>
}

function useDoor( { number, award, setSelectedDoor, selectedDoorNumber }: IDoorProps ){

    const [openDoor, setOpenDoor] = useState(false)

    function openTheDoor(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>){
        e.stopPropagation()
        setOpenDoor(true)
    }

    function selectDoor(){
        setSelectedDoor(number)
    }

    return{
        number,
        award,
        selectedDoorNumber,
        openDoor,
        openTheDoor,
        selectDoor
    }
}

export default function Door( props: IDoorProps ){

    const { number, award, selectedDoorNumber, openDoor, openTheDoor, selectDoor } = useDoor(props)

    const selectedDoor: boolean = number === selectedDoorNumber

    return(
        <div className={style.container} data-selected_door={selectedDoor} >
            <div className={style.body} onClick={selectDoor} data-door_open={openDoor}>
                <span className={style.number}>{number}</span>
                <div className={style.handle} onClick={openTheDoor}></div>
                {
                    openDoor && award && <Award />
                }
            </div>
            <div className={style.floor}></div>
        </div>
    )
}