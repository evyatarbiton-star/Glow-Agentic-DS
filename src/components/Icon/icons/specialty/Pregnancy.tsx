import type { SpecialtyIconProps } from "../../Icon.types";
const SvgPregnancy = ({
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
      <g clipPath="url(#Pregnancy_svg__a)">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M4.8 1.344c-2.008 10.68 5.08 18.648 2.24 29.888M23.856 31.226c5.904-5.832 7.944-16.232-3.792-21.36 3.888-3.272 1.864-7.896-3.032-8.528"
        />
        <path
          fill="#FE9767"
          d="M18.92 19.642c-2.032-1.92-6.792-1.064-6.24 2.88.64 4.616 9.68 5.936 9.68 5.936s4.896-6.264 3.304-10.12c-1.368-3.312-6.864-2.424-6.752 1.312z"
        />
      </g>
      <defs>
        <clipPath id="Pregnancy_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPregnancy;
