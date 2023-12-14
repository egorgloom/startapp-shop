import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from 'react-redux';

import {actions} from "../features/cartSlice"


const rootActions = {
    ...actions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() =>
        bindActionCreators(rootActions, dispatch)
        , [dispatch])
}