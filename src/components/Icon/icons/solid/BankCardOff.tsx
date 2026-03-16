import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBankCardOff = ({
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
      <path fill={color} d="M15 9a1 1 0 0 1 1-1h6v2h-6a1 1 0 0 1-1-1" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.143 4.144a2.3 2.3 0 0 0-.505.183 3 3 0 0 0-1.311 1.311c-.2.394-.278.864-.308 1.557-.012.271-.018.407.035.519.045.095.125.18.22.229.109.057.25.057.533.057H8zM10 10H2.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C2 10.38 2 10.52 2 10.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h10.4c1.277 0 2.068 0 2.657-.143zm-4 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M19.032 6.024C18.75 6 18.377 6 17.8 6H11a1 1 0 1 1 0-2h6.839c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V15a1 1 0 1 1-2 0V8.2c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBankCardOff;
