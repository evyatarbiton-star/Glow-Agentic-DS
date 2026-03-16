import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTouchId = ({
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
        d="M12 11a1 1 0 0 1 1 1c0 2.78-1.12 6.068-4.36 8.768a1 1 0 1 1-1.28-1.536C10.12 16.932 11 14.22 11 12a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 4a8 8 0 0 0-8 8 1 1 0 1 1-2 0C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-1.04 4.445 1 1 0 0 1-1.791-.89A8 8 0 0 0 12 4"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 8.5A3.5 3.5 0 0 0 8.5 12c0 2.118-1.068 3.615-2.07 4.545a8.2 8.2 0 0 1-1.833 1.278l-.139.067-.029.013a1 1 0 0 1-.596.083 1 1 0 0 1-.223-1.907l.01-.005q.026-.01.083-.04a6.19 6.19 0 0 0 1.366-.955C5.818 14.386 6.5 13.383 6.5 12a5.5 5.5 0 0 1 11 0c0 2.934-.8 5.332-1.598 6.995-.4.833-.8 1.485-1.105 1.934a11 11 0 0 1-.487.662l-.025.03-.005.006a1 1 0 0 1-.758.373 1 1 0 0 1-.782-1.649l.002-.003.017-.02.079-.1c.07-.091.176-.233.304-.423.258-.379.607-.945.957-1.675A14.2 14.2 0 0 0 15.5 12 3.5 3.5 0 0 0 12 8.5"
      />
    </svg>
  );
};
export default SvgTouchId;
