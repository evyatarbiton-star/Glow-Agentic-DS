import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLaptop = ({
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
        d="M6.024 8.968C6 9.25 6 9.623 6 10.2V17h12v-6.8c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C16.75 8 16.377 8 15.8 8H8.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422M4.03 8.805c.032-.395.103-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C7.18 6 7.635 6 8.161 6h7.678c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.357V19H4v-8.838c0-.528 0-.982.03-1.357"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgLaptop;
