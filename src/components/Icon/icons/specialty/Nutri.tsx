import type { SpecialtyIconProps } from "../../Icon.types";
const SvgNutri = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#Nutri_svg__a)">
        <g clipPath="url(#Nutri_svg__b)">
          <g clipPath="url(#Nutri_svg__c)">
            <path
              fill="#FE9767"
              d="M14.672 8.552s2.192-8.328 15.16-5.784c0 0-4.784 15.088-15.168 5.776z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M13.968 12.312c-8.056-3.952-12.8-.08-12.088 5.768s4.424 14.264 13.512 12.192M14.128 12.24C21.8 6.384 27.712 9.032 28.28 14.952s-.712 14.552-10.84 14.736M13.648 10.056l-1.504-7.384"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Nutri_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="Nutri_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Nutri_svg__c">
          <path fill="#fff" d="M0 0h31.976v31.976H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgNutri;
