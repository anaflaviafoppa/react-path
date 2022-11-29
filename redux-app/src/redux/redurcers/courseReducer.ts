import {ActionsName} from '../../utils/variables';

export default function courses(state = [], action: any) {
    const data = action.data;
    switch (action.type) {
        case ActionsName.CREATE_COURSE:
            return [...state, {...data}];
        case ActionsName.LOAD_COURSES:
            return action.courses;
        default:
            return state;
    }
}
