// React
import { CSSProperties, HTMLProps } from "react"

// CSS
import style from "./optionMenu.module.css"

interface IOptionMenuProps extends HTMLProps<HTMLDivElement> {
    bg_color: string
}

export default function OptionMenu( {bg_color, children, ...restProps}: IOptionMenuProps ){

    const dynamic_css: CSSProperties = {
        backgroundColor: bg_color
    }

    return(
        <div className={style.option_menu} style={dynamic_css} {...restProps} >
            {children}
        </div>
    )
}