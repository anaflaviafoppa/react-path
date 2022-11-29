import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';

export default function courses(state = [], action: Actions<any>) {
    const data = action.data;
    switch (action.type) {
        case ActionsName.CREATE_COURSE:
            return [...state, {...data}];
        default:
            return state;
    }
}
