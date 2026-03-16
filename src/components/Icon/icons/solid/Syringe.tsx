import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSyringe = ({
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
        d="M16.707 3.293a1 1 0 1 0-1.414 1.414L16.586 6l-2.293 2.293a1 1 0 0 0 1.414 1.414L18 7.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 4.586 19.414 12l-6.193 6.193a5 5 0 0 1-4.516 1.368l-2.376-.476-1.622 1.622a1 1 0 0 1-1.414-1.414l1.622-1.622-.476-2.376a5 5 0 0 1 1.368-4.516zm.293 7.707a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m-1.086 2.5a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.293 4.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSyringe;
