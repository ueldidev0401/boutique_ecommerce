import Link from "next/link";
import PropTypes from "prop-types";
import Image from "@components/ui/image";
import {placeholder} from "@utils/constant";
import {CategoryItem, CatItemInner, CatName} from "./category.style";

const Category = ({category, icon, slug}) => {
    return (
        <Link href={slug} passHref>
            <CategoryItem>
                <CatItemInner>
                    <Image
                        width={65}
                        height={65}
                        alt={category}
                        src={icon ? icon : placeholder}
                    />
                    <CatName>{category}</CatName>
                </CatItemInner>
            </CategoryItem>
        </Link>
    );
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string
};


export default Category;