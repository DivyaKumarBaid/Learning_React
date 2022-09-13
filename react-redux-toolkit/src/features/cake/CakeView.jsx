import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cakeActions } from './cakeSlice'

export const CakeView = () => {
    const cake = useSelector((state) => state.cake.cakes)
    const dispatch = useDispatch();
    // console.log
    return (
        <>
            <div>cakeView - No of Cakes = {cake}</div>
            <button onClick={() => dispatch(cakeActions.ordered(1))}>order</button>
            <button onClick={() => dispatch(cakeActions.restock(10))}>restock</button>
        </>
    )
}
