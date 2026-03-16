import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPicker = ({
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
        d="M12 6.586 17.414 12l-5.146 5.146a8 8 0 0 1-1.404 1.123l-3.647 2.307a2.75 2.75 0 0 1-3.794-3.794l2.307-3.646a8 8 0 0 1 1.124-1.404zm0 2.828-3.732 3.732q-.482.482-.848 1.06l-2.307 3.646a.75.75 0 0 0 1.035 1.034l3.646-2.307a6 6 0 0 0 1.06-.847L14.586 12z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19.877 4.123a3.83 3.83 0 0 0-5.414 0L12 6.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1 4 4 1 1a1 1 0 0 0 1.414-1.414L17.414 12l2.463-2.463a3.83 3.83 0 0 0 0-5.414M16 10.586l2.463-2.463a1.828 1.828 0 1 0-2.586-2.586L13.414 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPicker;
