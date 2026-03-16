import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFolderOff = ({
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
        d="M5 4a3 3 0 0 0-3 3v8.839c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h15.253l-16-16z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.253 6.003A4 4 0 0 0 10 6a1 1 0 1 1 0-2h.029c.14 0 .264 0 .386.01a3 3 0 0 1 1.699.703c.093.08.18.167.28.267l.02.02 1 1h4.425c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.357V16a1 1 0 1 1-2 0v-5.8c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C18.75 8 18.377 8 17.8 8H13a1 1 0 0 1-.707-.293L11 6.414a4 4 0 0 0-.181-.176 1 1 0 0 0-.566-.235M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFolderOff;
