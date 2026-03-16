import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBankCardEject = ({
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
        d="M5 3h14v14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.707 16.707a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V8a1 1 0 1 1 2 0v5.586l.293-.293a1 1 0 0 1 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgBankCardEject;
