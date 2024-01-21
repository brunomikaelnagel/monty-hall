"use client"

// imports React
import { useState } from 'react'

// Componentes Nextjs
import { useRouter } from 'next/navigation'

// Componentes
import Contador from '../components/Contador'
import OptionMenu from '../components/OptionMenu'

// CSS
import styles from './page.module.css'


function useHome(){
  const router = useRouter()
  const [quantDoors, setQuantDoors] = useState(0)
  const [awardWinningDoorNumber, setAwardWinningDoorNumber] = useState(0)

  function startMontyHall(){
    if(quantDoors >= 3 && awardWinningDoorNumber > 0 && awardWinningDoorNumber <= quantDoors){
      router.push(`/monty_hall/${quantDoors}/${awardWinningDoorNumber}`)
    }
  }
  
  return {
    quantDoors,
    setQuantDoors,
    awardWinningDoorNumber,
    setAwardWinningDoorNumber,
    startMontyHall,
  }

}

export default function Home() {

  const { quantDoors, setQuantDoors, awardWinningDoorNumber, setAwardWinningDoorNumber, startMontyHall  } = useHome()

  return (
    <main>
      <div className={styles.menu_container}>
        <OptionMenu bg_color='#BD312E'>
          <h1 className={styles.title} >Monty Hall</h1>
        </OptionMenu>
        <OptionMenu bg_color='lightgray'>
          <Contador title='Quantidade de portas?' value={quantDoors} setCount={setQuantDoors} minValue={0} />
        </OptionMenu>
        <OptionMenu bg_color='lightgray'>
          <Contador title='Portas selecionadas?' value={awardWinningDoorNumber} setCount={setAwardWinningDoorNumber} minValue={0} />
        </OptionMenu>
        <OptionMenu bg_color='#01967A' onClick={startMontyHall} >
          <h1 className={styles.title} >Iniciar</h1>
        </OptionMenu>
      </div>
    </main>
  )
}
