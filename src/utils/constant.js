import cogoToast from "cogo-toast";

export const PREFIX = "ht";
export const CURRENCY = "$";

export const placeholder = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_380x.gif";

export const previewModeNotification = (e) => {
    e.preventDefault();
    cogoToast.warn("On Demo Mode this functionality is disabled!", {
        heading: "Demo Mode",
        hideAfter: 6
    })
}