import type { SpecialtyIconProps } from "../../Icon.types";
const SvgLocation = ({
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
      <g clipPath="url(#Location_svg__a)">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M17.629 28.275c2.967-2.512 8.59-8.023 8.918-14.11.464-8.518-4.447-12.59-10.558-12.59-5.551 0-11.022 4.072-10.558 12.59s10.558 15.43 10.558 15.43"
        />
        <path
          fill="#FE9767"
          d="M15.989 20.467a8.011 8.011 0 1 0 0-16.023 8.011 8.011 0 0 0 0 16.023"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M15.99 4.265 16 9.999M16 13l-.011 7.866M19.189 9.1s-2.144-2.303-4.84-1.423-2.351 3.575.16 4.43c2.512.857 5.255 1.48 4.927 3.776s-5.446 2.544-7.158-.336"
        />
      </g>
      <defs>
        <clipPath id="Location_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgLocation;
