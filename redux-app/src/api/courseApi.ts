import { handleResponse, handleError } from "./apiUtils";
import {Course} from '../models/Course';
/*
const baseUrl = process.env.API_URL + "/courses/";
*/

const baseUrl = "http://localhost:3003/courses/";

export function getCourses(): Promise<Array<Course>> {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course: Course): Promise<Response> {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId: string): Promise<Response> {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
