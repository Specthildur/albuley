import Image from "next/image";
import fallbackImage from "@/public/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";

export default function ImageFallback({ alt, ...props }) {
    return <Image alt={alt} src={fallbackImage} {...props} />;
}
