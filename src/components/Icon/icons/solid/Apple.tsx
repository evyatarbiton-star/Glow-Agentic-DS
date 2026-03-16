import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgApple = ({
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
        d="M10.53 7.554C10.07 7.287 9.573 7 8.5 7 6.5 7 4 9 4 13s2.644 9 5 9c.75 0 1.125-.25 1.5-.5s.75-.5 1.5-.5 1.125.25 1.5.5.75.5 1.5.5c1.678 0 3.856-2.516 4.972-5.422.115-.3-.098-.619-.407-.704a3.502 3.502 0 0 1-.766-6.433c.304-.17.43-.576.186-.823C17.913 7.534 16.543 7 15.5 7c-.75 0-1.25.25-1.75.5s-1 .5-1.75.5c-.696 0-1.07-.215-1.47-.446"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 5.556A3.556 3.556 0 0 1 15.556 2c.245 0 .444.199.444.444A3.556 3.556 0 0 1 12.444 6 .444.444 0 0 1 12 5.556"
      />
    </svg>
  );
};
export default SvgApple;
