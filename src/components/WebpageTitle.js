import { HelmetProvider } from "react-helmet-async";

export const WebpageTitle = ({titleName}) => {
    return (
        <HelmetProvider>PCMovie | {titleName}</HelmetProvider>)
}