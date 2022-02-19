import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UploadButton from '../Sidenav/UploadButton.jsx';
import Cards from './Cards.jsx';
import Header1 from '../Navbar/Header1.jsx';
import Sidenavoptions from '../Sidenav/Sidenavoptions.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import CardButton from './CardButton.jsx';
import './Cards.css';

function MainView() {

    // useEffect(() => {
    //     getFiles();
    // }, []);

    // const [files, setFiles] = useState([]);
    // const getFiles = async () => {

    //     const res = await axios.get('http://localhost:3000/files/maheshkadam@gmail.com');
    //     //console.log(res.data);
    //     setFiles(res.data);
    //     console.log(files);
    // };

    const data = [
        {
            fileName: "text.txt"
        }, {
            fileName: "text2.txt"
        }, {
            fileName: "txt.txt"
        }, {
            fileName: "xt.txt"
        }, {
            fileName: "tt.txt"
        }, {
            fileName: "t.txt"
        },
        {
            fileName: "text.txt"
        }, {
            fileName: "text2.txt"
        }, {
            fileName: "txt.txt"
        }, {
            fileName: "xt.txt"
        }, {
            fileName: "tt.txt"
        }, {
            fileName: "t.txt"
        },
        {
            fileName: "t.txt"
        }
    ];

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col style={{ border: '1px solid black' }}>
                        <Header1></Header1>

                    </Col>
                </Row>
                <Row >
                    <Col xs={2}>
                        <UploadButton></UploadButton>
                        <Sidenavoptions></Sidenavoptions>
                    </Col>
                    <Col xs={10}>
                    <Row>
                    {
                        data.map((i) => {
                            return (
                                <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                    <Cards data={i} />
                                </Col>
                            )
                        })
                    }
                    </Row>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default MainView;