import * as AuthorApi from '../../api/authorApi';
import {Author} from '../../models/Author';
import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';

export function loadAuthorsSuccess(authors: Array<Author>): any {
    return {type: ActionsName.LOAD_AUTHORS, authors};
}

export function loadAuthors() {
    return function (dispatch: any) {
        return AuthorApi.getAuthors().then((authors: Array<Author>) => {
                dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw error;
        })
    }
}
