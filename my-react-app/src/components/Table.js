import React from 'react'

const Table = () => {

    const headers = ["ID", "NAME", "AGE"]

    let objects = [];

    for (let i = 0; i < 12; i++) {
        let newObj = {
            id: i + 1,
            name: "N.Phanindra",
            age: "26"
        };

        objects.push(newObj);
    }


    return (
        <div className='container'>
            <h1>Details</h1>
            <table className='table table-bordered '>
                <thead>
                    <tr>
                        {
                            headers.map((header, index) =>
                                <th key={index} className='col-4'>{header}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {objects.map((obj) => (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
