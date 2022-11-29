import React, {useState} from 'react';
import {Course} from '../../../models/Course';
import {connect} from 'react-redux';
import {createCourse} from '../../../redux/actions/courseActions';
import PropTypes from 'prop-types';


function CoursesPage(props: any) {
    const [course, setCourse] = useState<Course>({title: ''});

    const handleOnChange = (event: any) => {
        const newCourse: any = {...course};
        const name = event.target.name;
        const editedValue = event.target.value;
        newCourse[name] = editedValue;
        setCourse(newCourse);
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        props.dispatch(createCourse(course))
    }

    const renderListOfCourses = () => {
        return props.courses.map((courses: Course, index: number) => {
            return <div key={index} className="position-relative">
                <label className="list-group-item py-3 pe-5">
                    <strong className="fw-semibold">{courses.title}</strong>
                </label>
            </div>;
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add Course:</h3>
                <div className="mb-3">
                    <label htmlFor="titleCourse" className="form-label">Title Course:</label>
                    <input onChange={handleOnChange} name="title" value={course.title}  type="text" className="form-control" id="titleCourse" aria-describedby="titleHelp" />
                        <div id="titleHelp" className="form-text">Put the title of the new course.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <section className="list-group list-group-radio d-grid gap-2 border-0 w-auto my-3">
                {renderListOfCourses()}
            </section>
        </>
    );
}

function mapStateToProps(state: any, ownProps: any) {
    return {
        courses: state.courses
    }
}

CoursesPage.prototype = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CoursesPage);
