import React, {useState} from 'react';
import {Course} from '../../../models/Course';

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
        </>
    );
}

export default CoursesPage;
