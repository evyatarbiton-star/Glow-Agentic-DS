import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAquarius = ({
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
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm4.293-3.107a1 1 0 0 1 1.414 0L10 7.586l1.293-1.293a1 1 0 0 1 1.414 0L14 7.586l1.293-1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L16 8.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 8.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 8.414 6.707 9.707a1 1 0 0 1-1.414-1.414zM10 15.586l-1.293-1.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L8 16.414l1.293 1.293a1 1 0 0 0 1.414 0L12 16.414l1.293 1.293a1 1 0 0 0 1.414 0L16 16.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0L14 15.586l-1.293-1.293a1 1 0 0 0-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAquarius;
