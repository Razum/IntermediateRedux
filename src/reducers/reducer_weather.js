/**
 * Created by Пользователь on 24.04.2016.
 */

import { FETCH_WEATHER } from "../actions/index";

export default function (state=[], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]
    }
    return state;
}