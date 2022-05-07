import {useEffect} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import Loader from "@components/ui/loader";
import {saveCustomerData} from "@global/actions/customerAction";

const Logout = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveCustomerData({}));
        Cookies.remove("access_token");
        router.push("/");
    }, []);

    return (
        <div style={{height: "100vh", display: "flex", alignItems: "center"}}>
            <Loader loadingText="Signing Out..."/>
        </div>
    );
};

export default Logout;
