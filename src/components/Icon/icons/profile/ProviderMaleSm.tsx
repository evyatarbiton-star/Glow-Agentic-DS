// Figma node-id: 4108:11282 — Provider Male (Small / Simplified)
import type { SpecialtyIconProps } from "../../Icon.types";
const SvgProviderMaleSm = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 40 40"
      className={className}
      {...props}
    >
      <g clipPath="url(#ProviderMaleSm_svg__a)">
        <path
          fill="url(#ProviderMaleSm_svg__b)"
          d="M23.4118 22.7995C23.4416 21.9651 23.4714 21.1367 23.5012 20.3023C24.1389 19.8493 24.7587 19.3725 25.2296 18.7348C25.7957 17.966 26.058 17.0124 26.201 16.0826C26.4692 14.3662 26.2845 12.6557 25.7004 11.0405C27.0295 10.6114 28.4598 9.926 28.2393 8.35258C28.132 7.56587 27.4943 6.99371 26.7553 6.77319C26.3917 6.66591 26.0222 6.65399 25.6587 6.70167C25.7004 6.4454 25.6765 6.18316 25.5454 5.92092C25.1282 5.08057 24.0972 5.00309 23.2747 5.02693C21.3913 5.08653 19.2875 5.74212 17.5353 6.39176C14.8473 7.38707 13.6553 10.3253 13.9355 13.055C14.0904 14.5628 14.3527 15.4866 15.0738 16.8097C15.634 17.8289 16.4982 18.8063 17.422 19.5573L17.4935 22.2273C17.4935 22.4717 20.4437 27.5078 20.4437 27.5078L23.4118 22.8054V22.7995Z"
        />
        <path
          stroke="#000"
          strokeWidth={0.953591}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.70871 37.5179C8.70871 37.5179 8.32727 31.1527 8.43455 28.9714C8.54183 26.79 9.22722 25.306 11.9271 24.3405C14.6269 23.375 17.4937 22.2188 17.4937 22.2188M23.4119 22.7969C23.4119 22.7969 27.2799 23.8935 30.0095 26.0033C32.7392 28.1131 33.1743 28.8045 33.1802 31.6414C33.1802 33.8526 33.1802 37.5239 33.1802 37.5239"
        />
        <path
          stroke="#000"
          strokeWidth={0.953591}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.5116 41C17.4341 37.883 17.2732 27.6367 17.5116 22.7734"
        />
        <path
          stroke="#000"
          strokeWidth={0.953591}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M23.5132 22.7734C23.5907 25.8905 23.835 36.583 24.1092 41.5"
        />
        <path
          stroke="#000"
          strokeWidth={0.953591}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.1343 34.439C11.1343 34.439 12.8031 34.2423 14.8473 34.439"
        />
      </g>
      <defs>
        <radialGradient
          id="ProviderMaleSm_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.983 18.848) scale(15.2396)"
        >
          <stop stopColor="#FFDB57" />
          <stop offset={0.26} stopColor="#FBDA59" />
          <stop offset={0.46} stopColor="#F2DA62" />
          <stop offset={0.63} stopColor="#E1D870" />
          <stop offset={0.8} stopColor="#CAD684" />
          <stop offset={0.96} stopColor="#ACD49D" />
          <stop offset={1} stopColor="#A4D4A5" />
        </radialGradient>
        <clipPath id="ProviderMaleSm_svg__a">
          <rect width={26} height={36} fill="white" transform="translate(8.10254 5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgProviderMaleSm;
