import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApis'
import { Row, Col } from 'react-bootstrap';

function View({ updatedState }) {
    const [videos, setVideos] = useState([]);

    //state for delete
    const [deletedList, loadDeletedList] = useState({});

    const loadAllVideos = async () => {
        const result = await getAllVideos();
        if (result.status >= 200 && result.status < 300) {
            setVideos(result.data);
        }

    }

    useEffect(() => { loadAllVideos() }, [updatedState, deletedList]);
    return (
        <Row>

            {
                videos.length > 0 ?
                    videos.map(i =>
                        <Col lg={4} md={6}> <VideoCard video={i} deletedVideo={loadDeletedList}></VideoCard></Col>
                    )
                    : <h1>No videos found</h1>
            }
        </Row>
    )
}

export default View