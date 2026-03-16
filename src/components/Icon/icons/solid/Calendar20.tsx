import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCalendar20 = ({
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
        d="M8 3a1 1 0 0 1 1 1v1h6V4a1 1 0 1 1 2 0v1c.459 0 .86.003 1.195.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.678c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H7.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A18 18 0 0 1 3 16.839V9.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.141 5.003 6.541 5 7 5V4a1 1 0 0 1 1-1m1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-4h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCalendar20;
