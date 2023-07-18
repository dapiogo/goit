import { useState } from "react"


export const useToggleMessageBox = () => {
    const [isOpenMessageBox,setOpenMessageBox] = useState(false);

    const toggle = () => setOpenMessageBox(prev => !prev);
    const close = () => setOpenMessageBox(false);
    const open = () => setOpenMessageBox(true);

    return {
        toggle,
        close,
        open,
        isOpenMessageBox
    }
}