import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeartOff = ({
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
        d="M4.287 4.287A5.99 5.99 0 0 0 2 9c0 7.351 6.671 10.807 9.116 11.826.57.237 1.199.237 1.768 0 1.108-.462 3.086-1.425 4.916-3.025l-1.417-1.418c-1.577 1.35-3.286 2.187-4.269 2.597a.28.28 0 0 1-.228 0c-1.106-.461-3.132-1.463-4.854-3.13C5.34 14.212 4 12 4 9c0-1.36.679-2.561 1.716-3.284zM12 7.212l-1.334-1.194a4 4 0 0 0-.144-.123C10.217 5.647 10 5.293 10 4.9c0-.76.758-1.283 1.385-.854q.324.223.615.483A6 6 0 0 1 22 9c0 2.119-.554 3.914-1.401 5.42-.31.55-1.052.611-1.498.166-.342-.341-.39-.872-.162-1.297C19.59 12.076 20 10.659 20 9a4 4 0 0 0-6.666-2.982z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartOff;
