import type { SpecialtyIconProps } from "../../Icon.types";
const SvgOrthopedist = ({
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
      <g clipPath="url(#Orthopedist_svg__a)">
        <g clipPath="url(#Orthopedist_svg__b)">
          <g clipPath="url(#Orthopedist_svg__c)">
            <path
              fill="#FE9767"
              d="m0 0 8.288 16.272 3.304-2.672L20.8 32l11.176-.024-9.776-21.76-3.296 2.44L11.592 0z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M5.624 22.602c-1.176-.912-2.864-.84-3.936.24a2.994 2.994 0 0 0 0 4.232c.64.64 1.496.92 2.336.856-.064.84.216 1.696.856 2.336a2.994 2.994 0 0 0 4.232 0 2.98 2.98 0 0 0 .32-3.84C13 22.586 20.584 14.474 25.736 9.37c0 0 .016.016.016.024a2.994 2.994 0 0 0 4.232-4.232 2.96 2.96 0 0 0-2.336-.856 2.96 2.96 0 0 0-.856-2.336 2.994 2.994 0 0 0-4.616 3.76A417 417 0 0 1 6.872 21.436"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Orthopedist_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="Orthopedist_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Orthopedist_svg__c">
          <path fill="#fff" d="M0 0h31.976v31.976H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgOrthopedist;
