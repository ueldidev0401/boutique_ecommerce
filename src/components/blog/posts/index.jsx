import cn from "classnames";
import PropTypes from "prop-types";
import {BlogWrap} from "./blog.style";
import Post from "@components/blog/post";
import {Container, Col, Row, H3} from "@bootstrap";
import Slider, {Slide} from "@components/ui/swiper";
import SectionTitle from "@components/ui/section-title";

const LatestBlog = ({posts, className, props}) => {
    const settings = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: false,
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    }

    return (
        <BlogWrap
            {...props}
            className={cn(className)}
        >
            <Container>
                <Row>
                    <Col>
                        <SectionTitle
                            mb={52}
                            align="center"
                            title="Latest News"
                            content="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
                        />
                    </Col>
                </Row>

                {posts?.length > 0 ? (
                    <Slider settings={settings}>
                        {posts?.map(post => (
                            <Slide key={post?.node?.id}>
                                <Post
                                    post={post?.node}
                                />
                            </Slide>
                        ))}
                    </Slider>
                ) : (
                    <div className="text-center">
                        <H3>There are no articles found!</H3>
                    </div>
                )}
            </Container>
        </BlogWrap>
    );
};

LatestBlog.propTypes = {
    posts: PropTypes.array.isRequired,
    className: PropTypes.string
};


export default LatestBlog;