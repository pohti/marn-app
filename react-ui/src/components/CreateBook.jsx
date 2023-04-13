import { useState } from 'react';
import { gql, useMutation } from '@apollo/client'

const CREATE_BOOK_MUTATION = gql`
    mutation Mutation($title: String, $year: Int) {
        create(title: $title, year: $year) {
            id
            title
            year
        }
    }
`

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [createMutation] = useMutation(CREATE_BOOK_MUTATION);

    const handleSubmit = evt => {
        evt.preventDefault();
        console.info('Creating Book...', title, year);
        createMutation({
            variables: {
                title,
                year: +year,
            }
        });
        alert(`Book ${title} (${year}) created!`);
        setTitle('');
        setYear('');
    };

    return <form onSubmit={evt => handleSubmit(evt)}>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input 
                type="text" 
                name="title" 
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
        </div>
        <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input 
                type="text" 
                name="year" 
                className="form-control"
                value={year}
                onChange={e => setYear(e.target.value)}
                />
        </div>
        <input type="submit" value="Create" className="btn btn-primary" />
    </form>;
}

export default CreateBook;