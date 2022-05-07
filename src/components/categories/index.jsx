import cn from "classnames";
import PropTypes from "prop-types";
import {Container} from "@bootstrap";
import Category from "@components/category";
import {CategoriesWrap} from "./categories.style";
import Slider, {Slide} from "@components/ui/swiper";
import EmptyProduct from "@components/ui/empty";

const Categories = ({categories, className, ...props}) => {
    const settings = {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        autoplay: false,
        pagination: false,
        navigation: false,
        breakpoints: {
            420: {
                spaceBetween: 10
            },
            500: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    }

    return (
        <CategoriesWrap
            py={[60, 60, 100]}
            className={cn(className)}
            {...props}
        >
            <Container>
                {categories.length > 0 ? (
                    <Slider
                        settings={settings}
                    >
                        {categories?.map(({node: category}) => (
                            <Slide key={category?.id}>
                                <Category
                                    category={category?.title}
                                    icon={category?.image?.originalSrc}
                                    slug={`/collection/${category?.handle}`}
                                />
                            </Slide>
                        ))}
                    </Slider>
                ) : (
                    <EmptyProduct className="mt-0" message="Collections not found!"/>
                )}
            </Container>
        </CategoriesWrap>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};


export default Categories;