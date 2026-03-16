import type { SpecialtyIconProps } from "../../Icon.types";
const SvgOrtho = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#Ortho_svg__a)">
        <g clipPath="url(#Ortho_svg__b)">
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M1.28 28.637c.328-.328.592-.744.768-1.168.84-2.048 1.312-5.608 3.008-5.608 1.688 0 2.168 3.56 3.008 5.608.696 1.688 2.864 3.216 4.552.056.92-1.712 2.792-6.952 3.248-12.928.488-6.4-1.448-9.584-3.52-10.176-3.696-1.056-5.256 2.36-7.28 2.36-1.256 0-2.328-1.312-3.848-2.056"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M30.776 28.637a3.7 3.7 0 0 1-.768-1.168c-.84-2.048-1.312-5.608-3.008-5.608-1.688 0-2.168 3.56-3.008 5.608-.696 1.688-2.864 3.216-4.552.056-.92-1.712-2.792-6.952-3.248-12.928-.488-6.4 1.448-9.584 3.52-10.176 3.696-1.056 5.256 2.36 7.28 2.36 1.256 0 2.328-1.312 3.848-2.056"
          />
          <path
            fill="#FE9767"
            fillRule="evenodd"
            d="m1.912 9.473 6.272.4c1.024.064 1.848.888 1.848 1.84v5.84c0 .952-.832 1.672-1.848 1.608l-6.272-.4C.888 18.697.064 17.873.064 16.92v-5.84c0-.952.832-1.672 1.848-1.608m28.224 0c1.016-.064 1.848.656 1.848 1.608v5.84c0 .952-.824 1.776-1.848 1.84l-6.272.4c-1.016.064-1.848-.656-1.848-1.608v-5.84c0-.952.824-1.776 1.848-1.84z"
            clipRule="evenodd"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M1.208 13.821c6.192.8 16.312 1.384 29.648-.24"
          />
        </g>
      </g>
      <defs>
        <clipPath id="Ortho_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Ortho_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgOrtho;
