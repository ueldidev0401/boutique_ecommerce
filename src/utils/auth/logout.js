import Cookie from "js-cookie";
import {useRouter} from "next/router";

export default function logout(e) {
    const router = useRouter();
    e.preventDefault();
    Cookie.remove('access_token');
    router.push("/")
}