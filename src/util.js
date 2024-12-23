export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};
export const menuIcon = () => {
    return new URL(`/assets/nav/menuIcon.png`, import.meta.url).href;
};
export const closeIcon = () => {
    return new URL(`/assets/nav/closeIcon.png`, import.meta.url).href;
}