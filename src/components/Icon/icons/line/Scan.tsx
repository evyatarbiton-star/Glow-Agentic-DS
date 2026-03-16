import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgScan = ({
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
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 3h-.137c-.796 0-1.387 0-1.898.136a4 4 0 0 0-2.829 2.829C3 6.476 3 7.067 3 7.863V8a1 1 0 1 0 2 0c0-.994.009-1.295.068-1.518a2 2 0 0 1 1.414-1.414C6.705 5.008 7.006 5 8 5a1 1 0 0 0 0-2m8 18h.138c.795 0 1.386 0 1.897-.136a4 4 0 0 0 2.829-2.829c.137-.511.137-1.102.136-1.897V16a1 1 0 1 0-2 0c0 .994-.009 1.296-.068 1.518a2 2 0 0 1-1.414 1.414c-.223.06-.524.068-1.518.068a1 1 0 1 0 0 2M3 16.138V16a1 1 0 1 1 2 0c0 .994.009 1.296.068 1.518a2 2 0 0 0 1.414 1.414c.223.06.524.068 1.518.068a1 1 0 1 1 0 2h-.137c-.796 0-1.387 0-1.898-.136a4 4 0 0 1-2.829-2.829C3 17.524 3 16.933 3 16.138M21 8v-.137c0-.796 0-1.387-.136-1.898a4 4 0 0 0-2.829-2.829C17.524 3 16.933 3 16.138 3H16a1 1 0 1 0 0 2c.994 0 1.296.009 1.518.068a2 2 0 0 1 1.414 1.414c.06.223.068.524.068 1.518a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScan;
