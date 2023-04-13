import React from 'react'

const Book = ({book}) => {
    const { title, year } = book

    return (
        <tr>
            <td>{title}</td>
            <td>{year}</td>
        </tr>
    )
}

export default Book