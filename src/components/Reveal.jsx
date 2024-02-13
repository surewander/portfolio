
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useReducer, useRef } from "react"


const Reveal = (props)=>{
    const myWidth = props.width? props.width: "100%"
    const myRef = useRef(null);
    const isInView = useInView(myRef)

    
    const controls = useAnimation()
    useEffect(()=>{
        if(isInView){
            controls.start("visible")
        }
    },[isInView])
    return (
        <div style={{
            position: "relative", width: myWidth, overflow: 'hidden'
        }} ref={myRef}>
            <motion.div
                variants={{
                    hidden: props.hidden,
                    visible: props.visible
                }}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 0.9,
                     delay: 0.5
                    //ease: "easeIn"
                }}
            >{props.children}</motion.div>
        </div>
    )
}

export default Reveal;