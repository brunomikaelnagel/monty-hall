// CSS
import styles from "./montyHallDoorList.module.css"

// Componentes
import Door from "../Door"
import { useState } from "react"

interface IMontyHallDoorListProps {
    quantDoors: number
    awardWinningDoorNumber: number
}

function useMontyHallDoorList( { quantDoors, awardWinningDoorNumber } : IMontyHallDoorListProps ){

  const [selectedDoor, setSelectedDoor] = useState(0)

  function renderDoorList(){
    const listDoor = []
  
    for(let x = 1; x <= quantDoors; x++){
      if(x === awardWinningDoorNumber){
        listDoor.push(<Door key={x} number={x} award selectedDoorNumber={selectedDoor} setSelectedDoor={setSelectedDoor} />)
      }else{
        listDoor.push(<Door key={x} number={x} selectedDoorNumber={selectedDoor} setSelectedDoor={setSelectedDoor} />)
      }
    }

    return listDoor
  }

  return {
    renderDoorList
  }

}

export default function MontyHallDoorList( props: IMontyHallDoorListProps ){
  const { renderDoorList } = useMontyHallDoorList(props) 

  return(
    <div className={styles.monty_hall_container}>
        <div className={styles.door_list}>
        {renderDoorList()}
        </div>
    </div>
  )
}