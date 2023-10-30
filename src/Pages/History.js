import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHistory, getAllHistories } from '../services/allApis';
import moment from 'moment';

function History() {
    const [history, setHistory] = useState([]);
    var j = 0;

    const loadHistories = async () => {
        const result = await getAllHistories();
        setHistory(result.data);
    }

    useEffect(() => { loadHistories() }, []);

    const handleDelete = async (id) => {
        const result = await deleteHistory(id);
        if (result.status >= 200 && result.status < 300) {
            loadHistories();
        }
    }

    return (
        <div>
            <h4 className='mt-3 text-center mb-3'><b>Watch history</b></h4>

            <Table striped bordered hover className='w-75 container pb-5 mb-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {history ?
                        history.map(i =>
                            <tr>
                                <td>{++j}</td>
                                <td>{moment(i.date_time).format('DD MMMM, YYYY hh:m A')}</td>
                                <td>{i.video_title}</td>
                                <td>{i.url}</td>
                                <td>  <i class="fa-solid fa-trash fa-beat ms-2 text-danger" onClick={() => handleDelete(i.id)}></i></td>
                            </tr>

                        )
                        : <tr>No history found</tr>
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default History