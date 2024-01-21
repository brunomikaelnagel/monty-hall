import { Dispatch, SetStateAction, useEffect } from "react"
import style from "./contador.module.css"

interface ContadorProps {
    title: string
    value: number
    setCount: Dispatch<SetStateAction<number>>
    minValue?: number
}

function useContador( { title, value, setCount, minValue }: ContadorProps ){

    function incrementValue(){
        setCount(prev => prev + 1)
    }

    function decrementValue(){
        
        if(typeof minValue === "number" && value <= minValue){
            return
        }

        setCount(prev => prev - 1)
    }
    
    useEffect(() => {
        if(typeof minValue === "number"){
            setCount(minValue)
        }
    }, [minValue])

    return{
        title,
        value,
        incrementValue,
        decrementValue
    }

}

export default function Contador( props: ContadorProps ){

    const { title, value, decrementValue, incrementValue } = useContador(props)

    return(
        <div className={style.container}>
            <span className={style.title}>{title}</span>
            <span className={style.value} >{value}</span>
            <div className={style.buttons}>
                <button className={style.button} onClick={decrementValue} >-</button>
                <button className={style.button} onClick={incrementValue} >+</button>
            </div>
        </div>
    )
}