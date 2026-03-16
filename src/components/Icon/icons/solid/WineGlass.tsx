import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWineGlass = ({
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
        d="M12 18a1 1 0 0 0-1 1v1H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-1a1 1 0 0 0-1-1M8.682 2c-.564 0-1.253.107-1.854.54-2.19 1.576-3.262 4.92-2.67 7.814.305 1.488 1.058 2.92 2.382 3.974C7.865 15.385 9.68 16 12 16c2.318 0 4.134-.615 5.46-1.672 1.323-1.055 2.076-2.486 2.38-3.974.593-2.895-.479-6.238-2.67-7.815-.6-.433-1.29-.539-1.853-.539z"
      />
    </svg>
  );
};
export default SvgWineGlass;
