import {Container} from "@bootstrap";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {AiOutlineHome} from "react-icons/ai";
import {BiUser, BiHeart} from "react-icons/bi";
import {IoIosGitCompare} from "react-icons/io";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {getCartProductsQuantity} from "@utils/product";
import {MobileFooterWrap, FooterButtons} from "./style";
import {CartItemCount, HeaderActionBtn} from "@components/layout/header/header.style";

const MobileFooter = ({onMiniCartHandler}) => {
    const router = useRouter();
    const shoppingCart = useSelector(state => state.shoppingCart);
    const cartQuantity = getCartProductsQuantity(shoppingCart);

    return (
        <MobileFooterWrap>
            <Container>
                <FooterButtons>
                    <button onClick={() => router.push('/wishlist')}>
                        <BiHeart/>
                        <span>Wishlist</span>
                    </button>
                    <button onClick={() => router.push('/compare')}>
                        <IoIosGitCompare/>
                        <span>Compare</span>
                    </button>
                    <button onClick={() => router.push('/')}>
                        <AiOutlineHome/>
                        <span>Home</span>
                    </button>
                    <HeaderActionBtn
                        onClick={() => onMiniCartHandler()}
                    >
                        <HiOutlineShoppingBag/>
                        <span>Cart</span>
                        <CartItemCount>{cartQuantity}</CartItemCount>
                    </HeaderActionBtn>
                    <button onClick={() => router.push('/account')}>
                        <BiUser/>
                        <span>Account</span>
                    </button>
                </FooterButtons>
            </Container>
        </MobileFooterWrap>
    );
};

export default MobileFooter;
