import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { postApi } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Add({ update }) {
    const [show, setShow] = useState(false);
    const navigateToHome = useNavigate();
    const [inputs, setInputs] = useState({
        id: "",
        caption: "",
        thumbnail: "",
        url: ""
    });                        //for form

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setValues = (e) => {
        let value = e.target.value;   // or let {value,name} = e.target
        let name = e.target.name;
        setInputs({ ...inputs, [name]: value });    // ... operator is called spread operator  (to update new data within the object)
    }

    //function to extract url
    const extractUrl = (e) => {
        let videoUrl = e.target.value
        if (videoUrl.includes('v=')) {
            let videoId = videoUrl.split('v=')[1];
            let finalUrl = `https://youtube.com/embed/${videoId}`
            setInputs({ ...inputs, ['url']: finalUrl });
        }
    }

    const submitForm = async () => {
        let id = uniqid();
        setInputs({ ...inputs, ['id']: id });
        const { caption, thumbnail, url } = inputs;
        console.log(inputs)
        if (caption == '' || thumbnail == '' || url == '') {
            toast.error('All fields required!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            const result = await postApi(inputs);
            if (result.status >= 200 && result.status < 300) {
                toast('Uploaded successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                //update state of home to pass to the view child
                 update(result.data);    
                //navigateToHome('/home');
                setShow(false);
            }
        }
    }


    return (
        <div>
            <Button className='upload-button ms-2' onClick={handleShow}>
                Upload<i class="fa-solid fa-cloud-arrow-up ms-2 fa-bounce"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='header-font'>
                        <span className='red-text'>U</span>
                        <span className='white-text'>pload</span>
                        <span className='red-text'> V</span>
                        <span className='white-text'>ideo</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className='white-text content-font'>Video caption</Form.Label>
                            <Form.Control type="text" name="caption" placeholder="Caption" onChange={(e) => setValues(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label className='white-text content-font'>Thumbnail</Form.Label>
                            <Form.Control type="text" name="thumbnail" onChange={(e) => setValues(e)} placeholder="Thumbnail" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='white-text content-font'>Video link</Form.Label>
                            <Form.Control type="text" name="url" onChange={(e) => extractUrl(e)} placeholder="Video link" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='form-button' onClick={submitForm}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default Add