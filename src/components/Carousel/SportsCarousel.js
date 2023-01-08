import Carousel from 'react-bootstrap/Carousel';

function SportsCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={700}>
        <img
          className="d-block sport"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672814908773_f1web.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block sport"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672815509121_formulaeweb.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SportsCarousel;