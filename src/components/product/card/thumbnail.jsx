import cn from "classnames";
import Link from "next/link";
import PropTypes from 'prop-types';
import Image from "@components/ui/image";
import {placeholder} from "@utils/constant";
import {ProductImage} from "./product.style";

const ProductThumbnail = ({product}) => {
    const {title, images, handle} = product;

    return (
        <ProductImage>
            <Link href={`/product/${handle}`}>
                <a>
                    {images?.edges?.length > 0 ? (
                        images?.edges?.slice(0, 2).map(({node: thumb}, idx) => (
                            <div key={idx} className={cn("thumb", {"hover-image": idx === 1})}>
                                <Image
                                    alt={title}
                                    width={270}
                                    height={318}
                                    src={thumb.originalSrc}
                                />
                            </div>
                        ))
                    ) : (
                        <Image
                            alt={title}
                            width={270}
                            height={318}
                            src={placeholder}
                        />
                    )}
                </a>
            </Link>
        </ProductImage>
    );
};

ProductThumbnail.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductThumbnail;