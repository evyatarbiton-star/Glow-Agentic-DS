import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeartRate = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M2.73 13a10.7 10.7 0 0 1-.558-2h8.327a1 1 0 0 1 .92.606l.58 1.355 2.08-4.855a1 1 0 0 1 1.84 0L17.158 11h4.667c-.126.71-.316 1.375-.558 2H16.5a1 1 0 0 1-.92-.606L15 11.039l-2.08 4.855a1 1 0 0 1-1.84 0L9.84 13z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m12 7.212-1.334-1.194A4 4 0 0 0 4 9c0 3 1.34 5.212 3.032 6.85 1.722 1.667 3.748 2.668 4.854 3.13a.28.28 0 0 0 .228 0c1.106-.462 3.132-1.463 4.854-3.13C18.66 14.212 20 12 20 9a4 4 0 0 0-6.666-2.982zm0-2.684A6 6 0 0 0 2 9c0 7.351 6.671 10.806 9.116 11.825.57.238 1.199.238 1.768 0C15.328 19.806 22 16.351 22 9a6 6 0 0 0-10-4.472"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartRate;
