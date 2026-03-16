import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCancer = ({
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
        d="M8 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zM8 11a3 3 0 0 0-3 3c0 2.8 2.733 5 7 5 2.553 0 4.509-.756 5.714-1.987a1 1 0 0 0-1.428-1.4C15.559 16.357 14.18 17 12 17c-1.037 0-1.883-.139-2.565-.365A3 3 0 0 0 8 11m8 2a3 3 0 0 1-1.435-5.635C13.883 7.139 13.037 7 12 7c-2.181 0-3.559.644-4.286 1.386a1 1 0 0 1-1.428-1.4C7.49 5.757 9.447 5 12 5c4.267 0 7 2.2 7 5a3 3 0 0 1-3 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCancer;
