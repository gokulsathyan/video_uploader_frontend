import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { deleteCategory, getAllCategories, getSingleVideo, saveCategory, updateCategory } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function Category() {
    const [inputs, setInputs] = useState({
        id: "",
        category: "",
        videos: [],
    });

    const [categories, setCategories] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setValues = (e) => {
        let { value, name } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const submitForm = async () => {
        let id = uniqid();
        setInputs({ ...inputs, ['id']: id });
        const { category } = inputs;
        if (category == '') {
            toast.error('Category is required!', {
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
            const result = await saveCategory(inputs);
            if (result.status >= 200 && result.status < 300) {
                loadCategories();
                toast('Added successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                setShow(false);
            }
        }
    }

    const loadCategories = async () => {
        const result = await getAllCategories();
        setCategories(result.data);
    }

    useEffect(() => { loadCategories() }, []);

    const handleDelete = async (id) => {
        const result = await deleteCategory(id);
        if (result.status >= 200 && result.status < 300) {
            loadCategories();
        }
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dropped = async (e, id) => {
        //access video id
        const videoId = e.dataTransfer.getData("cardId");
        const videoDetails = await getSingleVideo(videoId);

        const selectedCategory = categories.find(i => i.id == id);
        selectedCategory.videos.push(videoDetails.data);
        const result = await updateCategory(id, selectedCategory);
        loadCategories();
    }
    return (
        <div>
            <Button className='category-button ms-2' onClick={handleShow}>
                Add Category
            </Button>
            {
                categories.length > 0 ?
                    categories.map(i =>
                        <Link to={`/category/${i.id}`} style={{ textDecoration: 'none' }}>
                            <div droppable onDragOver={(e) => { dragOver(e) }} onDrop={(e) => dropped(e, i.id)} className='border mt-3 p-3'>
                                <p className='fs-4 white-text content-font'>{i.category} </p>
                                <div className='text-end'>
                                    <i class="fa-solid fa-trash fa-beat ms-2 text-danger" onClick={() => handleDelete(i.id)}></i>
                                </div>
                                {
                                    i.videos.map(j =>
                                        <img className='mr-2' style={{ height: '60px', width: '60px' }} src={j.thumbnail}></img>
                                    )
                                }
                            </div>
                        </Link>
                    )

                    :
                    <h1>No categories found</h1>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='header-font'>
                        <span className='red-text'>A</span>
                        <span className='white-text'>dd</span>
                        <span className='red-text'> C</span>
                        <span className='white-text'>ategory</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className='white-text content-font'>Category</Form.Label>
                            <Form.Control type="text" name="category" placeholder="Category" onChange={(e) => setValues(e)} />
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

export default Category