import { React, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteVideo, saveHistory } from '../services/allApis';
import uniqid from 'uniqid';
import moment from 'moment';

function VideoCard({ video, deletedVideo }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        var id = uniqid();
        var video_title = video.caption;
        var url = video.url;
        var date_time = moment().format('YYYY-MM-DD HH:mm:ss');
        const body = { id, video_title, url, date_time };
        const result = await saveHistory(body);
    }

    const handleDelete = async (id) => {
        const result = await deleteVideo(id);
        if (result.status >= 200 && result.status < 300) {
            deletedVideo(result.data);
        }
    }

    const dragStart = (e, id) => {
        //store dragged data  (in dataTransfer of e event)
        e.dataTransfer.setData("cardId", id);
    }

    return (
        <div>
            <Card draggable onDragStart={(e) => dragStart(e, video.id)} style={{ width: '18rem', marginRight: '10px' }} className='mb-sm-2'>
                <Card.Img onClick={handleShow} variant="top" src={video.thumbnail} style={{ width: '100%', height: '250px' }} />
                <Card.Body className='p-3'>
                    <Card.Title>
                        <h5 className='header-font white-text text-start'>{video.caption}</h5>
                        <div className='text-end'>
                            <i class="fa-solid fa-trash fa-beat ms-2 text-danger" onClick={() => handleDelete(video.id)}></i>
                        </div>

                    </Card.Title>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="300" src={video.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default VideoCard