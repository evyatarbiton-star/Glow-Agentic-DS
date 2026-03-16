import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserGroup = ({
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
        d="M9.65 4.052c.34.056.456.459.272.75A5.97 5.97 0 0 0 9 8c0 1.175.338 2.272.922 3.197.184.292.068.695-.273.75a4 4 0 1 1 0-7.895M6.41 14c.431 0 .677.528.453.898A5.97 5.97 0 0 0 6 18c0 .421.065.827.186 1.209.116.367-.133.791-.518.791H4a2 2 0 0 1-2-2 4 4 0 0 1 4-4zM15 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4"
      />
    </svg>
  );
};
export default SvgUserGroup;
