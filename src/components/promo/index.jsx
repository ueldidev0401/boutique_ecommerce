import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import parse from "react-html-parser";
import Image from "@components/ui/image";
import {PromoItem, PromoInfo, PromoContent, PromoTitle} from "./promo.style";

const Promo = ({title, content, thumb, slug, className, align}) => {
    return (
        <Link href={slug} passHref>
            <PromoItem
                className={cn(className)}
            >
                <figure>
                    <Image
                        src={thumb}
                        alt={title}
                        width={570}
                        height={290}
                        layout="responsive"
                    />
                </figure>
                <PromoInfo align={align ? align : 'left'}>
                    <PromoContent>
                        <PromoTitle>{parse(title)}</PromoTitle>
                        {content && <p>{content}</p>}
                    </PromoContent>
                </PromoInfo>
            </PromoItem>
        </Link>
    );
};

Promo.propTypes = {
    align: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
};

export default Promo;