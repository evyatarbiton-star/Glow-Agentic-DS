import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPalette1 = ({
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
        d="M12.683 20.147a.5.5 0 0 0 .353.853h5.965a2 2 0 0 0 2-2v-4a2 2 0 0 0-1.299-1.873zM13 15.793a.5.5 0 0 0 .854.353l5.562-5.562a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0L13 5z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPalette1;
