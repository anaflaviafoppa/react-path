import {Course} from '../../models/Course';
import {Actions} from '../../models/Actions';
import {ActionsName} from '../../utils/variables';
import * as CourseApi from '../../api/courseApi';

export function createCourse(course: Course): any {
    return {type: ActionsName.CREATE_COURSE, data: course}
}

export function loadCourseSuccess(courses: any): any {
    return {type: ActionsName.LOAD_COURSES, courses};
}

export function loadCourses() {
    return function (dispatch: any) {
        return CourseApi.getCourses().then((listOfCourses: Array<Course>) => {
            dispatch(loadCourseSuccess(listOfCourses));
        }).catch(error => {
            throw error
        })
    }
}
