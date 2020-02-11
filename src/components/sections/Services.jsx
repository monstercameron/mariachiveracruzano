import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import facebook from '../../assets/images/fb.png'
import insta from '../../assets/images/insta.png'
import yt from '../../assets/images/yt.png'
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ytPlaylist: (
                <iframe
                    title='yt_embed'
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/videoseries?list=UUDJ8qtBDbQADa7k4zaFNK0w"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            )
        };
    }
    imageBackground = () => {
        function importAll(r) {
            return r.keys().map(r);
        }
        const images = importAll(
            require.context(
                "../../assets/images/instafeed",
                false,
                /\.(png|jpe?g|svg)$/
            )
        );
        //console.log(images);
        return images.map((image, index) => {
            return (
                <Col sm={2} className="m-0 p-0 image-box" key={`bg-image-col-${index}`}>
                    <img src={image} alt={`bg-${index}`} className="img-fluid" />
                </Col>
            );
        });
    };
    render() {
        return (
            <>
                <Row>
                    <Col sm={10} className="mx-auto m-0 pt-1 pr-1 pl-1">
                        {this.state.ytPlaylist}
                    </Col>
                    <Col sm={2} className="mx-auto m-0 p-4 social-box">
                        <Row>
                            <Col sm={12} className="mx-auto m-0 p-2">
                                <img alt='social-yt' src={yt} className='img-fluid social-media-box d-inline-block mr-3 social-media-item' />
                                youtube
                            </Col>
                            <Col sm={12} className="mx-auto m-0 p-2">
                                <img alt='social-insta' src={insta} className='img-fluid social-media-box d-inline-block mr-3 social-media-item' />
                                instagram
                            </Col>
                            <Col sm={12} className="mx-auto m-0 p-2">
                                <img alt='social-fb' src={facebook} className='img-fluid social-media-box d-inline-block mr-3 social-media-item' />
                                facebook
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>{this.imageBackground()}</Row>
            </>
        );
    }
}

export default Services;
