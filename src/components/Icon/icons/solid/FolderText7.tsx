import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFolderText7 = ({
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
        d="M10.872 4.082C10.524 4 10.165 4 9.758 4H6.16c-.527 0-.981 0-1.356.03-.395.033-.789.105-1.167.297a3 3 0 0 0-1.311 1.311c-.193.379-.264.772-.296 1.167C2 7.18 2 7.634 2 8.161v7.677c0 .527 0 .982.03 1.356.033.396.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.375.03.83.03 1.356.03H17.84c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.379.264-.772.296-1.168.031-.374.031-.829.031-1.356V10.16c0-.527 0-.982-.03-1.357-.033-.395-.104-.788-.297-1.167a3 3 0 0 0-1.311-1.31c-.378-.193-.772-.265-1.167-.297A18 18 0 0 0 17.839 6h-4.425l-.828-.83c-.288-.287-.541-.541-.847-.729a3 3 0 0 0-.867-.359M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFolderText7;
