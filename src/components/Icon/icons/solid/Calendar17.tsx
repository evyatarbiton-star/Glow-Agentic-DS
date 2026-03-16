import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCalendar17 = ({
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
        d="M9 4a1 1 0 1 0-2 0v1c-.459 0-.86.003-1.195.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167q-.024.311-.028.695c-.004.276.221.5.497.5h17a.496.496 0 0 0 .497-.5q-.003-.384-.028-.695c-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296C17.859 5.003 17.459 5 17 5V4a1 1 0 1 0-2 0v1H9zm12 7.5a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v5.339c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h9.678c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCalendar17;
