import Link from "next/link";
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Container, Col, Row} from "@bootstrap";
import {BreadcrumbWrap, BreadcrumbTitle, BreadcrumbNav, BreadcrumbNavItem, BreadcrumbNavLink} from "./breadcrumb.style";

const Breadcrumb = ({pageTitle, ...props}) => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {breadcrumb: path.replace(/-/g, ' '), href: '/' + linkPath.slice(0, i + 1).join('/')};
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <BreadcrumbWrap {...props}>
            <Container>
                {pageTitle && (
                    <BreadcrumbTitle>
                        {pageTitle}
                    </BreadcrumbTitle>
                )}

                <BreadcrumbNav>
                    <BreadcrumbNavItem>
                        <Link href="/" passHref>
                            <BreadcrumbNavLink>Home</BreadcrumbNavLink>
                        </Link>
                    </BreadcrumbNavItem>
                    {breadcrumbs.map((breadcrumb, i) => (
                        breadcrumbs.length !== (i + 1) ? (
                            <BreadcrumbNavItem key={breadcrumb.breadcrumb}>
                                <Link href={breadcrumb.href} passHref>
                                    <BreadcrumbNavLink>{breadcrumb.breadcrumb}</BreadcrumbNavLink>
                                </Link>
                            </BreadcrumbNavItem>
                        ) : (
                            <BreadcrumbNavItem key={breadcrumb.breadcrumb}>
                                {breadcrumb?.breadcrumb.replace(/\?(.*)/g, '')}
                            </BreadcrumbNavItem>
                        )
                    ))}
                </BreadcrumbNav>
            </Container>
        </BreadcrumbWrap>
    );
};

Breadcrumb.propTypes = {
    pageTitle: PropTypes.string
};


export default Breadcrumb;
