import {useSelector} from "react-redux";
import {Container, Thead, Tbody, Tr} from "@bootstrap";
import WishlistItem from "@components/wishlist/wishlist-product";
import {CartProductsList, CartListTable, TableResponsive, TableHeading} from "@components/cart/listing/style";

const WishlistProducts = (props) => {
    const wishlist = useSelector(state => state.wishlist);

    return (
        <CartProductsList {...props}>
            <Container>
                <TableResponsive responsive={true}>
                    <CartListTable>
                        <Thead>
                            <Tr>
                                <TableHeading>Image</TableHeading>
                                <TableHeading>Product Name</TableHeading>
                                <TableHeading>Until Price</TableHeading>
                                <TableHeading>Add to Cart</TableHeading>
                                <TableHeading>Action</TableHeading>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {wishlist.map(product => (
                                <WishlistItem product={product} key={product?.id}/>
                            ))}
                        </Tbody>
                    </CartListTable>
                </TableResponsive>
            </Container>
        </CartProductsList>
    );
};

export default WishlistProducts;
