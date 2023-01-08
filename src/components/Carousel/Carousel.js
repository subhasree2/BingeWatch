import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={700}>
        <img
          className="d-block img"
          src="https://images.hindustantimes.com/tech/img/2021/02/05/960x540/BookMyShow_Stream_(2)_(1)_1612519743017_1612519762302.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block img"
          src="https://images.assettype.com/afaqs%2F2021-02%2F6333f87b-dd9a-44c1-9bf0-fa1239f1f6b3%2FBookMyShow_Stream__1_.jpg?auto=format%2Ccompress"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block img"
          src="https://images.assettype.com/afaqs%2F2021-02%2F10017051-66d6-40d6-838a-52fd235ba3a1%2FBookMyShow_Stream__3_.jpg?auto=format%2Ccompress&w=1200"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;