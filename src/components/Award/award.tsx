// CSS
import style from "./award.module.css"

export default function Award(){
    return(
        <div className={style.award_area}>
            <div className={style.award_container}>
                <div className={style.award_body}>
                    <div className={style.award_link_x} ></div>
                    <div className={style.award_link_y} ></div>
                </div>
            </div> 
        </div>   
    )
}