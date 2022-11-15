import React, {useState} from 'react';
import {CardProps} from '../../../models/props/CardProps';
import PropTypes from 'prop-types';


function Form(props: { handleSubmit: (arg0: CardProps) => void; } ) {
    const emptyPerson = {name: '', company: '', image: ''};
    const [person, setPerson] = useState<CardProps>(emptyPerson);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        const targetName = target.name;
        const personEdited: CardProps = person;
        personEdited[targetName] = value;
        setPerson(personEdited);

    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        props.handleSubmit(person);
        setPerson(emptyPerson);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input required={true} onChange={handleChange} type="text" name="name" />
            </label>
            <label>
                Company:
                <input required={true} onChange={handleChange} type="text" name="company" />
            </label>
            <label>
                Image:
                <input required={true} onChange={handleChange} type="text" name="image" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

Form.prototype = {
    handleSubmit:  PropTypes.func,
};

export default Form;
