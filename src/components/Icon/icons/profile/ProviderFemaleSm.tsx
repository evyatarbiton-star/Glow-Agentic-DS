// Figma node-id: 4108:11222 — Provider Female (Small / Simplified)
import type { SpecialtyIconProps } from "../../Icon.types";
const SvgProviderFemaleSm = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#ProviderFemaleSm_svg__a)">
        <path
          fill="url(#ProviderFemaleSm_svg__b)"
          d="M23.5152 25.3455C23.4968 24.5064 23.4907 23.6674 23.4907 22.8283C23.656 22.8161 23.8214 22.7977 23.9929 22.7487C24.8626 22.4976 25.426 21.7443 25.7567 20.9359C26.5774 18.927 26.8285 16.4711 26.4672 14.3398C26.3324 13.5498 26.0752 12.7781 25.72 12.0554C26.5835 11.9451 27.3369 11.3021 27.4655 10.5243C27.6308 9.50148 26.6938 8.66855 25.7078 8.31945C25.1014 8.1051 24.4461 8.0316 23.803 7.97036C23.1967 7.91524 22.5904 7.86012 21.9779 7.86012C21.2736 7.86012 20.5754 7.93361 19.9324 8.13572C20.2692 7.66413 20.5264 7.11906 20.5264 6.53723C20.5203 5.07961 19.0198 4.29567 17.7643 4.08744C16.2822 3.84246 14.6837 4.09969 13.471 5.01836C12.3135 5.88804 11.6092 7.25379 11.8787 8.71755C12.0869 9.84445 12.9872 10.7447 14.059 10.9775C13.3118 13.0108 13.3241 15.2769 14.1937 17.2918C14.9164 18.9577 16.1781 20.3112 17.7276 21.2115C17.7276 21.9832 17.7276 22.7548 17.7276 23.5327C17.7276 23.9491 17.7276 24.3656 17.7276 24.782L21.0409 30.5513L23.5336 25.3455H23.5152Z"
        />
        <path
          stroke="#000"
          strokeWidth={0.979916}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.6614 39.7874C9.37355 36.8783 9.21431 31.9664 11.1435 29.486C13.0727 27.0056 17.3047 25.2969 17.3047 25.2969M23.9804 25.7501C23.9804 25.7501 28.3166 27.814 29.3393 30.5456C30.3621 33.2771 30.1355 39.7813 30.1355 39.7813"
        />
        <path
          stroke="#000"
          strokeWidth={0.979916}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.8457 39.7891C16.8457 39.7891 17.4153 30.6636 17.2989 25.3047"
        />
        <path
          stroke="#000"
          strokeWidth={0.979916}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24.2072 39.789C24.2072 39.789 23.8642 31.1229 23.9745 25.7578"
        />
      </g>
      <defs>
        <radialGradient
          id="ProviderFemaleSm_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.1943 25.3149) scale(18.5755 18.5755)"
        >
          <stop stopColor="#FFDB57" />
          <stop offset={0.29} stopColor="#FED757" />
          <stop offset={0.51} stopColor="#FECE5A" />
          <stop offset={0.71} stopColor="#FEBD5D" />
          <stop offset={0.9} stopColor="#FEA663" />
          <stop offset={1} stopColor="#FE9767" />
        </radialGradient>
        <clipPath id="ProviderFemaleSm_svg__a">
          <rect width={21.65} height={36.2753} fill="white" transform="translate(9 4)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgProviderFemaleSm;
