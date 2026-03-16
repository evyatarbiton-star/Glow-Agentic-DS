import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLoading = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M11 5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm0 12a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm9-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1M7 11a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm10.657-4.657a1 1 0 0 0-1.414 0l-1.415 1.415a1 1 0 0 0 1.415 1.414l1.414-1.414a1 1 0 0 0 0-1.415m-9.9 8.485a1 1 0 0 1 1.414 1.414l-1.414 1.415a1 1 0 1 1-1.414-1.415zm9.9 2.829a1 1 0 0 0 0-1.414l-1.415-1.415a1 1 0 0 0-1.414 1.415l1.414 1.414a1 1 0 0 0 1.415 0m-8.485-9.9a1 1 0 0 1-1.414 1.414L6.343 7.757a1 1 0 0 1 1.415-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLoading;
