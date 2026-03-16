import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCloseSmall = ({
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
        d="M15.914 10.914a2 2 0 1 0-2.828-2.828L12 9.172l-1.086-1.086a2 2 0 1 0-2.828 2.828L9.172 12l-1.086 1.086a2 2 0 1 0 2.828 2.828L12 14.828l1.086 1.086a2 2 0 1 0 2.828-2.828L14.828 12z"
      />
    </svg>
  );
};
export default SvgCloseSmall;
