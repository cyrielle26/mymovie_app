import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export const scrollTop = () => {
    //const lo = useLocation();
    //=> change the current page path content as object
    //console.log(lo);

    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathName])
    //    |__ applied everytime the path change 

    return;
}