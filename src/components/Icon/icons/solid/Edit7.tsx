import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEdit7 = ({
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
        d="M10 19a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M17.297 4.703a2.414 2.414 0 0 0-3.414 0l-9.48 9.48a2 2 0 0 0-.363.497l-1.915 3.714c-.492.952.53 1.973 1.481 1.482L7.32 17.96a2 2 0 0 0 .497-.364l9.48-9.48a2.414 2.414 0 0 0 0-3.414"
      />
    </svg>
  );
};
export default SvgEdit7;
