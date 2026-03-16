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
        d="M12 2a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M12 17a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1M21 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM7 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1M17.657 4.929a1 1 0 1 1 1.414 1.414L16.95 8.464a1 1 0 0 1-1.415-1.414zM8.464 15.536a1 1 0 0 0-1.414 0L4.93 17.657a1 1 0 0 0 1.414 1.414l2.121-2.121a1 1 0 0 0 0-1.414M19.071 17.657a1 1 0 0 1-1.414 1.414l-2.121-2.121a1 1 0 0 1 1.414-1.415zM8.464 8.464a1 1 0 0 0 0-1.414L6.343 4.93a1 1 0 1 0-1.414 1.414L7.05 8.464a1 1 0 0 0 1.414 0"
      />
    </svg>
  );
};
export default SvgLoading;
