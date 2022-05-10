import {Container} from "@bootstrap";
import {useRouter} from "next/router";
import {useDispatch,useSelector} from "react-redux";
import {AiOutlineHome} from "react-icons/ai";
import {BiUser, BiHeart} from "react-icons/bi";
import {IoIosGitCompare} from "react-icons/io";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {getCartProductsQuantity} from "@utils/product";
import {MobileFooterWrap, FooterButtons} from "./style";
import {CartItemCount, HeaderActionBtn} from "@components/layout/header/header.style";
import { changeViewAction } from "@global/actions/cardActions";
import {BsSortDownAlt} from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import {BiSearchAlt2} from 'react-icons/bi';
import Categories from '@assets/image/footer/categories.svg';
import { changeIsCategoriesModalShowAction } from "@global/actions/cardActions";

const MobileFooter = ({onMiniCartHandler}) => {
    const router = useRouter();
    const shoppingCart = useSelector(state => state.shoppingCart);
    const cartQuantity = getCartProductsQuantity(shoppingCart);
    var dispatch = useDispatch();
    return (
        <MobileFooterWrap>
            <Container>
                <FooterButtons>
                    <button onClick={() => dispatch(changeIsCategoriesModalShowAction(true))}>
                        {/* <BiHeart/> */}
                        <img src={Categories.src} style={{margin: 'auto', marginBottom: '8px'}}/>
                        <span>Categories</span>
                    </button>
                    <button>
                        <BsSortDownAlt style={{transform: 'scaleX(-1)'}}/>
                        <span>View</span>
                    </button>
                    <button>
                        <BiFilterAlt/>
                        <span>Filters</span>
                    </button>
                    <button onClick={() => router.push('/account')}>
                        <BiSearchAlt2/>
                        <span>Search</span>
                    </button>
                </FooterButtons>
            </Container>
        </MobileFooterWrap>
    );
};

export default MobileFooter;
