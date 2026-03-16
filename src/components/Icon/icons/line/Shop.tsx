import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShop = ({
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
        d="M6 17v-7H4v7a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-7h-2v7a2 2 0 0 1-2 2h-1v-2a3 3 0 1 0-6 0v2H8a2 2 0 0 1-2-2m5 2h2v-2a1 1 0 1 0-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.015 8.906a2 2 0 0 1 1.404.637c.124.133.267.244.429.322.155.074.362.135.652.135.383 0 .736-.182 1.023-.551A2.4 2.4 0 0 0 19 8c0-1.858-1.458-3-3-2.999H8.001C6.457 5.001 5 6.142 5 8c0 .54.184 1.07.477 1.448.287.369.64.551 1.023.551.29 0 .497-.06.652-.135.162-.078.305-.189.429-.322a2 2 0 0 1 2.845-.085c.268.255.732.542 1.574.542s1.306-.287 1.574-.542a2 2 0 0 1 1.44-.552m.005 2.068C15.556 11.52 16.362 12 17.5 12c1.114 0 2.012-.565 2.602-1.323A4.4 4.4 0 0 0 21 8c0-3.132-2.531-5-5-4.999H7.999C5.532 3.002 3 4.866 3 8c0 .96.317 1.928.898 2.676C4.488 11.435 5.386 12 6.5 12c1.138 0 1.944-.48 2.48-1.027q.034-.033.066-.068l.07.066C9.745 11.539 10.678 12 12 12s2.256-.461 2.883-1.03l.072-.066q.031.034.065.069"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShop;
