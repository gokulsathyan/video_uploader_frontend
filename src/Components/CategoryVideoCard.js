import { React, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { updateCategory, saveHistory } from '../services/allApis';
import uniqid from 'uniqid';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CategoryVideoCard({ video, category }) {
    const [show, setShow] = useState(false);
    const navigateCategory = useNavigate();

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
        const newVideos = category.videos.filter(i => i.id !== id);
        category.videos = newVideos;
        await updateCategory(category.id, category);
        navigateCategory(`/category/${category.id}`);
    }

    return (
        <div><Card draggable style={{ width: '18rem', marginRight: '10px' }} className='mb-sm-2'>
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
            <ToastContainer />
        </div>

    )
}

export default CategoryVideoCard