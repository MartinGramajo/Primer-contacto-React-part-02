import './header.css';
import { Carousel, Button } from 'react-bootstrap';
export default function Header() {
    return (
        <div className=" container col-lg-12 col-sm-12">
            <Carousel >
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://images.unsplash.com/photo-1623079397242-c2e809a6ef1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Scooter sharing made simple</h3>
                        <p> Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you-re away!</p>
                        <Button variant="warning">Get Scootin</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://images.unsplash.com/photo-1538895490524-0ded232a96d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Scooter sharing made simple</h3>
                        <p> Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you-re away!</p>
                        <Button variant="warning">Get Scootin</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImg"
                        src="https://images.unsplash.com/photo-1572168737399-24c6f29b860a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Scooter sharing made simple</h3>
                        <p> Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you-re away!</p>
                        <Button variant="warning">Get Scootin</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
