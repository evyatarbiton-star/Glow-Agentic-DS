import type { SpecialtyIconProps } from "../../Icon.types";
const SvgPlanInfo = ({
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
      <g clipPath="url(#PlanInfo_svg__a)">
        <g clipPath="url(#PlanInfo_svg__b)">
          <path
            fill="#FE9767"
            d="M10.368 12.112a5.256 5.256 0 1 0 0-10.512 5.256 5.256 0 0 0 0 10.512"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M3.176 30.836V5.1H28.24v25.736M6.728 15.875H24.52M6.728 22.988h15.44M6.728 19.438h12.728"
          />
        </g>
      </g>
      <defs>
        <clipPath id="PlanInfo_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="PlanInfo_svg__b">
          <path fill="#fff" d="M0 0h31.976v31.952H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPlanInfo;
