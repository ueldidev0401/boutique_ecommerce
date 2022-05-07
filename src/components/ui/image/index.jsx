import PropTypes from "prop-types";
import NextImage from "next/image";

const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#eaeae8" offset="20%" />
          <stop stop-color="#eaeae8" offset="50%" />
          <stop stop-color="#eaeae8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#eaeae8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`

const toBase64 = (str) => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Image = ({src, alt, width, height, ...props}) => {
    return (
        <NextImage
            alt={alt}
            src={src}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
            {...props}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image