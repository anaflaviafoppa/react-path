import { handleResponse, handleError } from "./apiUtils";
import {Author} from '../models/Author';
import {throws} from 'assert';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;
/*
const baseUrl = process.env.API_URL + "/authors/";
*/
const baseUrl = "http://localhost:3003/authors/";
export function getAuthors(): Promise<Array<Author>> {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getAuthor(authorId: number): Promise<Author | void> {
  return getAuthors().then((listOfAuthors: Array<Author>) => {
    const author = listOfAuthors.find(author => author.id === authorId);
    if (!author) {
      return Promise.reject('Author not found');
    }

    return author;
  }).catch(handleError);
}
