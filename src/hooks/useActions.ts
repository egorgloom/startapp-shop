import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from 'react-redux';

import {cartActions} from "../features/cartSlice"


const rootActions = {
    ...cartActions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() =>
        bindActionCreators(rootActions, dispatch)
        , [dispatch])
}