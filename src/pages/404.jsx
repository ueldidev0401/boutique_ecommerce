import Head from "next/head";
import {useRouter} from "next/router";
import Image from "@components/ui/image";
import settings from "@data/settings.json";
import Button from "@components/ui/button";
import thumb from "/public/images/error.png"
import {ErrorPage} from "@assets/css/global.style";

const Error404Page = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{"Page not found (404) :: " + settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <ErrorPage>
                <div>
                    <Image
                        src={thumb}
                        width={320}
                        height={115}
                        alt="Furns 404 Error Page"
                    />
                    <h3>That Page Can’t be found!</h3>
                    <p>It looks like nothing was found at this location.</p>
                    <Button
                        mt="35px"
                        tag="button"
                        bg="primary"
                        color="white"
                        borderRadius="sm"
                        hvrBg="secondary"
                        fontSize="standard"
                        onClick={() => router.back()}
                    >
                        Go to Back
                    </Button>
                </div>
            </ErrorPage>
        </div>
    );
};

export default Error404Page;
