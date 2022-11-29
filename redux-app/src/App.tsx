import React from 'react';
import HomePage from './views/pages/home-page/HomePage';
import {Routes, Route} from 'react-router-dom';
import AboutPage from './views/pages/about-page/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './views/share/layout/Layout';
import CoursesPage from './views/pages/courses-page/CoursesPage';
import CourseDetailPage from './views/pages/course-detail/CourseDetailPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage></AboutPage>}/>
                    <Route path="course/:courseId" element={<CourseDetailPage></CourseDetailPage>}/>
                    <Route path="courses" element={<CoursesPage></CoursesPage>}/>

                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
