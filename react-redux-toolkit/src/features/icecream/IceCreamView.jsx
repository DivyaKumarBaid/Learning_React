import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { iceActions } from './iceSlice';

export const IceCreamView = () => {
    const dispatch = useDispatch();
    const ice = useSelector((state) => state.ice.ice)
    return (
        <>
            <div>iceCreamView - No of Ice  = {ice}</div>
            <button onClick={() => dispatch(iceActions.ordered(1))}>order</button>
            <button onClick={() => dispatch(iceActions.restock(10))}>restock</button>
        </>
    )
}
