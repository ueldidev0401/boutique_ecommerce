import PropTypes from "prop-types";
import Slider, {Slide} from "@components/ui/swiper";
import {SlideOne as SlideItem} from "./slide/slide-one";

const SliderOne = ({data, animate, settings, className}) => {
    return (
        <Slider
            animate={animate}
            settings={settings}
            className={className}
        >
            {data.map(slide => (
                <Slide key={slide.id}>
                    <SlideItem
                        title={slide.title}
                        thumb={slide.thumb}
                        content={slide.content}
                        subTitle={slide.subtitle}
                    />
                </Slide>
            ))}
        </Slider>
    );
};

SliderOne.propTypes = {
    data: PropTypes.array.isRequired,
    settings: PropTypes.shape({
        navigation: PropTypes.bool,
        pagination: PropTypes.bool,
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({})
    }),
    animate: PropTypes.bool,
    className: PropTypes.string
};

export default SliderOne;