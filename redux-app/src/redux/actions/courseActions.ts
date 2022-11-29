import {Course} from '../../models/Course';
import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';

export function createCourse(course: Course): Actions<Course> {
    return {type: ActionsName.CREATE_COURSE, data: course}
}
