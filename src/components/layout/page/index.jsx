import PropTypes from 'prop-types';
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";

const PageLayout = ({children, pageTitle, ...props}) => {
    return (
        <Layout {...props}>
            <Breadcrumb pageTitle={pageTitle}/>
            {children}
        </Layout>
    );
};

PageLayout.propTypes = {
    pageTitle: PropTypes.string,
};


export default PageLayout;
