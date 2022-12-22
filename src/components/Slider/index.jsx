import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import { image1, image2, image3 } from '../../assets'
import { mobile } from "../../responsive";

const Img = styled.img`
   ${mobile({

})}
`

const Index = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Img
                    className="d-block w-100"
                    src={image1}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <Img
                    className="d-block w-100"
                    src={image2}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <Img
                    className="d-block w-100"
                    src={image3}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Index;