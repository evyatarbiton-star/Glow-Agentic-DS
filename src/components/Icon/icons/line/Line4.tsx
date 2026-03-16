import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine4 = ({
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
        d="M15.006 4h1.988q.006.062.006.125v15.75q0 .063-.006.125h-1.988a1 1 0 0 1-.006-.125V4.125q0-.063.006-.125M7.006 4h1.988Q9 4.062 9 4.125v15.75q0 .063-.006.125H7.006A1 1 0 0 1 7 19.875V4.125q0-.063.006-.125"
      />
      <path
        fill={color}
        d="M5.447 2.106a1 1 0 1 0-.894 1.789C6.731 4.984 9.896 5.5 12 5.5s5.27-.516 7.447-1.605a1 1 0 1 0-.894-1.79C16.731 3.018 13.896 3.5 12 3.5s-4.73-.483-6.553-1.394M18.553 21.894a1 1 0 1 0 .895-1.789C17.27 19.016 14.105 18.5 12 18.5c-2.104 0-5.269.516-7.447 1.605a1 1 0 1 0 .894 1.79C7.27 20.982 10.105 20.5 12 20.5c1.896 0 4.731.483 6.553 1.394"
      />
    </svg>
  );
};
export default SvgLine4;
