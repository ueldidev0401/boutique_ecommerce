import {useProduct} from "@hooks";
import PropTypes from 'prop-types';
import Tooltip from "@components/ui/tooltip";
import {ActionButton} from "./product.style";
import {IoIosGitCompare, IoMdHeartEmpty} from "react-icons/io";
import {AiOutlineDelete, AiOutlineFullscreen} from "react-icons/ai";

const ProductActions = ({product, onQuickViewHandler}) => {
    const {id} = product;
    const {isInWishlist, isInCompareList, onWishlistHandler, onCompareHandler} = useProduct(product);

    return (
        <>
            <div className="btn-action">
                <ActionButton
                    className="wishlist"
                    isActive={isInWishlist}
                    id={`wishlist-button-${id}`}
                    onClick={() => onWishlistHandler()}
                >
                    {isInWishlist ? <AiOutlineDelete/> : <IoMdHeartEmpty/>}
                </ActionButton>
                <Tooltip target={`wishlist-button-${id}`}>
                    {!isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'}
                </Tooltip>
            </div>

            <div className="btn-action">
                <ActionButton
                    className="quickview"
                    id={`quickview-button-${id}`}
                    onClick={() => onQuickViewHandler()}
                >
                    <AiOutlineFullscreen/>
                </ActionButton>
                <Tooltip target={`quickview-button-${id}`}>Quick View</Tooltip>
            </div>

            <div className="btn-action">
                <ActionButton
                    className="compare"
                    isActive={isInCompareList}
                    id={`compare-button-${id}`}
                    onClick={() => onCompareHandler()}
                >
                    {isInCompareList ? <AiOutlineDelete/> : <IoIosGitCompare/>}
                </ActionButton>
                <Tooltip target={`compare-button-${id}`}>
                    {!isInCompareList ? 'Add to Compare' : 'Remove from Compare'}
                </Tooltip>
            </div>
        </>
    );
};

ProductActions.propTypes = {
    product: PropTypes.object.isRequired,
    onQuickViewHandler: PropTypes.func.isRequired,
};


export default ProductActions;
