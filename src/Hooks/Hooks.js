import { useEffect } from "react"

const titleName = title =>{
useEffect(()=>{
    document.title = title
},[title])
};

export default titleName;