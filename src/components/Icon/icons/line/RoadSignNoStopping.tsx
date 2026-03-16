import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignNoStopping = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a7.97 7.97 0 0 0 4.906-1.68L12 13.414 7.094 18.32A7.97 7.97 0 0 0 12 20m-6.32-3.094L10.586 12 5.68 7.094A7.97 7.97 0 0 0 4 12c0 1.849.627 3.551 1.68 4.906m6.32-6.32L7.094 5.68A7.97 7.97 0 0 1 12 4c1.849 0 3.551.627 4.906 1.68zM13.414 12l4.906-4.906A7.97 7.97 0 0 1 20 12a7.97 7.97 0 0 1-1.68 4.906z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoadSignNoStopping;
