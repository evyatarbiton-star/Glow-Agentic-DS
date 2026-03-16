import type { SpecialtyIconProps } from "../../Icon.types";
const SvgPediatrician = ({
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
      <g clipPath="url(#Pediatrician_svg__a)">
        <g clipPath="url(#Pediatrician_svg__b)">
          <g clipPath="url(#Pediatrician_svg__c)">
            <path
              fill="#FE9767"
              d="m15.2 15.84 15.752-.352S32.432 3.832 19.64 0z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="m4.008 12 27.192.428S29.82 21.6 25.11 21.6c-7.918 0-8.23-.024-14.708 0C5.41 21.616 4 12 4 12zM11.144 31.36a3.064 3.064 0 1 0 0-6.129 3.064 3.064 0 0 0 0 6.128M23.952 31.36a3.064 3.064 0 1 0 0-6.129 3.064 3.064 0 0 0 0 6.128M.8 4s1.192.416 1.72 1.584C3.136 6.96 3.544 9.584 4 12M11.496 28.294 21.2 23.2M23.952 28.294 14 23.2"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Pediatrician_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Pediatrician_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Pediatrician_svg__c">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPediatrician;
