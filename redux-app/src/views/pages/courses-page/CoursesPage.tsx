import React, {useEffect, useState} from 'react';
import {Course} from '../../../models/Course';
import {connect} from 'react-redux';
import * as courseActions from '../../../redux/actions/courseActions';
import * as authorActions from '../../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';
import {Link} from 'react-router-dom';
import {Author} from '../../../models/Author';
import {AnyAction, Dispatch} from 'redux';


function CoursesPage(props: any) {
    const [course, setCourse] = useState<Course>({title: '', id: '', category: '', slug: '', authorId: 0});

    useEffect(() => {
        loadCourses();
        loadAuthors();
    }, []);

    const loadCourses = () => {
        props.courseActions.loadCourses().catch((error?: any) => {
            console.error(error);
        });
    }

    const loadAuthors = () => {
        props.authorActions.loadAuthors().catch((error?: any) => {
            console.error(error);
        });
    }

    const handleOnChange = (event: any) => {
        const newCourse: any = {...course};
        const name = event.target.name;
        const editedValue = event.target.value;
        newCourse[name] = editedValue;
        setCourse(newCourse);
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        /*props.courseActions.createCourse(course);*/
    }

    const getAuthorName = (authorId: number):string => {
       return props.authors?.find((author: Author) => author.id === authorId) || ''
    }

    const renderListOfCourses = () => {
        return props.courses.map((course: Course, index: number) => {

            return <div  className="position-relative" key={index}>
                            <Link to={`/course/${course.slug}`}>
                            <label className="list-group-item py-3 pe-5">
                                <strong className="fw-semibold ">{course.title}
                                    <span className="badge bg-secondary mx-3">{course.category}</span>
                                </strong>
                                    <p>{course.authorName}</p>
                            </label>
                            </Link>
                        </div>
                    ;
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
        courses: state.courses.map((course: Course) => {
            return {...course,
                authorName: state.authors.find((author: Author) => author.id === course.authorId).name || ''}
        }),
        authors: state.authors
    }
}

// determines which shares are available in that component:
function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
    return {
        courseActions: bindActionCreators(courseActions, dispatch),
        authorActions: bindActionCreators(authorActions, dispatch),
    }
}

CoursesPage.prototype = {
    courseActions: PropTypes.object.isRequired,
    authorActions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
