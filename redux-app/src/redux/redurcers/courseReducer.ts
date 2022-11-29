import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';

export default function courseReducer(state = [], action: Actions<any>) {
    const data = action.data;
    switch (action.type) {
        case ActionsName.CREATE_COURSE:
            return [...state, {...data.course}];
        default:
            return state;
    }
}
