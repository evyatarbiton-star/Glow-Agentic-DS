import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFolderTable = ({
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
        d="M9 14V4h.758c.407-.001.766-.001 1.114.082a3 3 0 0 1 .867.36c.306.187.56.44.846.729l.83.828h4.424c.527 0 .982 0 1.356.03.395.033.789.105 1.167.297a3 3 0 0 1 1.311 1.311c.193.379.264.772.296 1.167.031.375.031.83.031 1.357V14zM6.161 4H7v10H2V8.16c0-.526 0-.981.03-1.356.033-.395.104-.788.297-1.167a3 3 0 0 1 1.311-1.31c.378-.193.772-.265 1.167-.297C5.18 4 5.635 4 6.161 4M9 16h13c0 .459-.003.859-.03 1.194-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.297-.375.03-.83.03-1.356.03H9zM2 16c0 .459.003.859.03 1.194.033.396.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.374.03.83.03 1.356.03H7v-4z"
      />
    </svg>
  );
};
export default SvgFolderTable;
