import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleCategory } from '../services/allApis';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryVideoCard from '../Components/CategoryVideoCard';


function CategoryDetails() {
    const { id } = useParams();
    const [category, setCategory] = useState([]);

    const getCategoryDetails = async () => {
        const result = await getSingleCategory(id);
        setCategory(result.data);
    }

    useEffect(() => {
        getCategoryDetails()
    }, []);

    return (
        <div>
            <h4 className='text-center mt-3 mb-3'>{category.category}</h4>
            <Container>
                <Row className='p-3'>
                    {
                        category.videos?.map(i =>
                            <Col lg={4} md={6}> <CategoryVideoCard video={i} category={category}></CategoryVideoCard></Col>
                        )
                    }
                </Row>
            </Container>


        </div>
    )
}

export default CategoryDetails