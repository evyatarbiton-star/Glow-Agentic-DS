import type { SpecialtyIconProps } from "../../Icon.types";
const SvgAllergist = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
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
      <g clipPath="url(#Allergist_svg__a)">
        <g clipPath="url(#Allergist_svg__b)">
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M12.144 23.632c-2.952 1.384-7.528 3.68-7.096 5.656.664 3.056 6.288-1.52 11.984-3.496M9.936 20.608c-2.952 1.384-8.448 3.856-8.096 5.856.216 1.24 1.888.776 1.888.776"
          />
          <path
            fill="#FE9767"
            fillRule="evenodd"
            d="M20.318 11.965c2.697-1.325 5.761-.612 6.844 1.593s-.225 5.066-2.922 6.39c-2.696 1.325-5.76.612-6.843-1.593s.225-5.066 2.921-6.39m-8.29-2.84c1.694-.832 3.615-.387 4.293.993s-.145 3.173-1.839 4.005-3.615.387-4.293-.993.146-3.174 1.84-4.005"
            clipRule="evenodd"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M9.552 17.312c-2.952 1.384-8.448 3.856-8.096 5.856M3.344 18.392c-.352-2 5.144-4.472 8.096-5.856C17.392 9.968 19.8 8.808 25.696 2.24M30.52 19.112C22.208 29.256 14.2 30.856 12.392 29.68"
          />
        </g>
      </g>
      <defs>
        <clipPath id="Allergist_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="Allergist_svg__b">
          <path fill="#fff" d="M.8 1.6h30.36v29.36H.8z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgAllergist;
