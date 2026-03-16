import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFastForward = ({
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
        d="M7 6.007c0-2.469 2.815-3.88 4.794-2.405l7.98 5.953a3.05 3.05 0 0 1 0 4.89l-7.98 5.953C9.815 21.874 7 20.462 7 17.993zm3.598-.802A1 1 0 0 0 9 6.007v11.986a1 1 0 0 0 1.598.802l7.981-5.953a1.05 1.05 0 0 0 0-1.684z"
        clipRule="evenodd"
      />
      <path fill={color} d="M3 4a1 1 0 0 1 2 0v16a1 1 0 1 1-2 0z" />
    </svg>
  );
};
export default SvgFastForward;
