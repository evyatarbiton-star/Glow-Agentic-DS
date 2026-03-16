import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLaptop1 = ({
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
        d="M5.6 14c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 13.24 4 12.96 4 12.4V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v5.2c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C19.24 14 18.96 14 18.4 14zM4.667 20c-.62 0-.93 0-1.185-.068a2 2 0 0 1-1.414-1.414C2 18.263 2 17.953 2 17.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707C2.868 16 3.023 16 3.333 16h17.334c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592 0 .62 0 .93-.068 1.185a2 2 0 0 1-1.414 1.414c-.255.068-.565.068-1.185.068z"
      />
    </svg>
  );
};
export default SvgLaptop1;
