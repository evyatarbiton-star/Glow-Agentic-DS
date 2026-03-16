import type { SpecialtyIconProps } from "../../Icon.types";
const SvgOncologist2 = ({
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
      <g clipPath="url(#Oncologist2_svg__a)">
        <g clipPath="url(#Oncologist2_svg__b)">
          <g clipPath="url(#Oncologist2_svg__c)">
            <path
              fill="#FE9767"
              d="M31.024 13.888 7.256 11.384l-1.68 1.536 16.728 17.904s10.416-3.16 8.72-16.944z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="m13.304 30.832-.504-4.68s4.136.248 6.016-1.136c1.704-1.248 2.792-2.6 2.448-8.616l2.504-.112S23.96.584 12.488.64C2.048.688.416 12.472.664 21.296c.152 5.296.968 9.528.968 9.528"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M8.952 11.328s-2.888-1.184-3.56 1.776c-.52 2.304 1.736 3.456 1.736 3.456"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Oncologist2_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="Oncologist2_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Oncologist2_svg__c">
          <path fill="#fff" d="M0 0h31.208v31.472H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgOncologist2;
