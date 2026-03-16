import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWeight = ({
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
        d="M9 4a2 2 0 0 0-1.846 2.77l.77 1.845a1 1 0 1 1-1.847.77l-.77-1.847C4.21 4.904 6.147 2 9 2h5.994c2.85 0 4.785 2.895 3.697 5.528l-.767 1.854a1 1 0 1 1-1.848-.764l.766-1.854A2 2 0 0 0 14.994 4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWeight;
