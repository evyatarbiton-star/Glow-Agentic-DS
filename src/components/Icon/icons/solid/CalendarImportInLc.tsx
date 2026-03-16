import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCalendarImportInLc = ({
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
        d="M9 4a1 1 0 1 0-2 0v1c-.459 0-.86.003-1.195.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C3 8.18 3 8.635 3 9.161v7.678c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h9.678c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V9.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296C17.859 5.003 17.459 5 17 5V4a1 1 0 1 0-2 0v1H9zm-.707 9.707a1 1 0 0 1 0-1.414l2-2a1 1 0 1 1 1.414 1.414l-.293.293H15a1 1 0 1 1 0 2h-3.586l.293.293a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCalendarImportInLc;
