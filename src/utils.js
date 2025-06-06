export const getImageUrl = () => {
    return new URL(`/assets/`, import.meta.url).href;
};
export const menuIcon = () => {
    return new URL(`/assets/nav/menuIcon.png`, import.meta.url).href;
};
export const closeIcon = () => {
    return new URL(`/assets/nav/closeIcon.png`, import.meta.url).href;
}
export const heroImage = () => {
    return new URL(`/assets/hero/heroImage.png`, import.meta.url).href;
}
export const hand = () => {
    return new URL(`/assets/hero/hand.gif`, import.meta.url).href;
}
export const aboutImage = () => {
    return new URL(`/assets/about/aboutImage.png`, import.meta.url).href;
}
export const cursorIcon = () => {
    return new URL(`/assets/about/cursorIcon.png`, import.meta.url).href;
}
export const dev = () => {
    return new URL(`/assets/about/dev.gif`, import.meta.url).href;
}

export const htmlIcon = () => {
    return new URL(`/assets/skills/html.png`, import.meta.url).href;
}