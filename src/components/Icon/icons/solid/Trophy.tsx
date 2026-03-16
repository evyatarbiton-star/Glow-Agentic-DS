import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTrophy = ({
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
        d="M12 17a1 1 0 0 0-1 1H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2a1 1 0 0 0-1-1M5.143 5A3.143 3.143 0 0 0 2 8.143 3.857 3.857 0 0 0 5.857 12H8v-2H5.857A1.857 1.857 0 0 1 4 8.143C4 7.512 4.512 7 5.143 7H8V5zm13.714 0A3.143 3.143 0 0 1 22 8.143 3.857 3.857 0 0 1 18.143 12H16v-2h2.143A1.857 1.857 0 0 0 20 8.143C20 7.512 19.488 7 18.857 7H16V5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 6.538A2.54 2.54 0 0 1 8.538 4h6.923A2.54 2.54 0 0 1 18 6.538V9A6 6 0 0 1 6 9z"
      />
    </svg>
  );
};
export default SvgTrophy;
