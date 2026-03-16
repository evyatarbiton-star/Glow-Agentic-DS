import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrush = ({
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
        d="M8.461 10.6a3.516 3.516 0 1 1 4.94 4.938l-6.202 4.9A2.59 2.59 0 0 1 3.562 16.8zm3.831 1.107a1.516 1.516 0 0 0-2.261.132l-4.9 6.201a.59.59 0 0 0 .828.829l6.201-4.9c.712-.563.774-1.62.132-2.262"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.793 6.207c-1.329-1.329-3.091-1.323-4.33-1.085-.218.041-.463.27-.463.706v3.344a1 1 0 0 0 .293.707l.828.828a1 1 0 0 0 .707.293h3.344c.437 0 .665-.245.706-.463.238-1.239.244-3.001-1.085-4.33m-4.707-3.05c1.481-.284 4.09-.395 6.121 1.636 2.03 2.03 1.92 4.64 1.636 6.121C20.58 12.277 19.345 13 18.173 13h-3.345a3 3 0 0 1-2.12-.879l-.83-.828A3 3 0 0 1 11 9.172V5.828c0-1.173.723-2.409 2.086-2.67"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBrush;
