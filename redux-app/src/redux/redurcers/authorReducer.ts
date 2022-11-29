import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';

export default function authors(state = [], action: any) {
    switch (action.type) {
        case ActionsName.LOAD_AUTHORS:
            return action.authors;
        default:
            return state;
    }
}
