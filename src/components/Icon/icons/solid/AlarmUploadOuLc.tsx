import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmUploadOuLc = ({
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
        d="M18.293 15.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 18.414V22a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20.5 13c.276 0 .515-.224.5-.5-.26-4.738-4.197-8.5-9-8.5a9 9 0 1 0 .554 17.983.48.48 0 0 0 .446-.486V19a6 6 0 0 1 6-6zM4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmUploadOuLc;
