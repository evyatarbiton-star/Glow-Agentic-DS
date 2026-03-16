import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFencing = ({
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
        d="M3.293 3.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0M18.62 20.034l-.232.233a2.5 2.5 0 0 1-3.536 0l-.831-.831a3.5 3.5 0 0 1 0-4.95l.457-.458a3.51 3.51 0 0 1 4.964 0l.825.824a2.5 2.5 0 0 1 0 3.536l-.233.232.673.673a1 1 0 0 1-1.414 1.414zm-2.728-4.592a1.51 1.51 0 0 1 2.136 0l.824.825a.5.5 0 0 1 0 .707l-1.879 1.879a.5.5 0 0 1-.707 0l-.831-.832a1.5 1.5 0 0 1 0-2.12zM20.708 3.293a1 1 0 0 1 0 1.414L10.406 15.008a3.5 3.5 0 0 1-.432 4.426l-.831.831a2.5 2.5 0 0 1-3.536 0l-.229-.229-.67.671a1 1 0 0 1-1.415-1.414l.671-.671-.236-.236a2.5 2.5 0 0 1 0-3.535l.825-.825a3.51 3.51 0 0 1 4.44-.432l10.3-10.301a1 1 0 0 1 1.415 0M8.102 15.44a1.51 1.51 0 0 0-2.135 0l-.824.824a.5.5 0 0 0 0 .707L7.02 18.85a.5.5 0 0 0 .707 0l.832-.832a1.5 1.5 0 0 0 0-2.12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFencing;
