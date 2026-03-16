import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedal = ({
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
        fillRule="evenodd"
        d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14m2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M14.651 6.254a.52.52 0 0 0 .284.235c.83.287 1.605.69 2.305 1.193.255.183.619.113.77-.163l1.8-3.3A1.5 1.5 0 0 0 18.493 2h-3.316a2 2 0 0 0-1.749 1.029l-.15.27a.5.5 0 0 0 0 .485zM6.76 7.682a.526.526 0 0 1-.77-.163l-1.8-3.3A1.5 1.5 0 0 1 5.507 2h3.316a2 2 0 0 1 1.749 1.029l1.543 2.778A.13.13 0 0 1 12 6a8.96 8.96 0 0 0-5.24 1.682"
      />
    </svg>
  );
};
export default SvgMedal;
