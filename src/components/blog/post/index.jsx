import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import {formatDate} from "@utils/method";
import Image from "@components/ui/image";
import Button from "@components/ui/button";
import {PostItem, PostContent, PostMeta, PostTitle} from "./post.style";

const Post = ({post, className, ...props}) => {
    const {title, handle, excerpt, image, publishedAt, authorV2} = post;

    return (
        <PostItem className={cn(className)} {...props}>
            <Link href={`/blog/${handle}`} passHref>
                <a>
                    <Image
                        alt={title}
                        width={400}
                        height={250}
                        layout="responsive"
                        src={image?.originalSrc}
                    />
                </a>
            </Link>

            <PostContent>
                <PostTitle><Link href={`/blog/${handle}`}>{title}</Link></PostTitle>

                <PostMeta>
                    By <Link href={`/blog/${handle}`}><a>{authorV2?.name},</a></Link>
                    <Link href={`/blog/${handle}`}>{formatDate(publishedAt)}</Link>
                </PostMeta>

                <p>{excerpt}</p>

                <Button
                    tag="a"
                    href={`/blog/${handle}`}
                    bg="text"
                    color="white"
                    hvrBg="primary"
                    hvrColor="white"
                    className="btn-read"
                    p={[null,null, "15px 25px"]}
                >
                    Read More
                </Button>
            </PostContent>
        </PostItem>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default Post;