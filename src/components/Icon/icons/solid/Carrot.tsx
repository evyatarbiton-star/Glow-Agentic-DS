import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCarrot = ({
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
        d="M8.406 9.82a.48.48 0 0 0-.692.004c-.745.799-1.445 1.805-2.066 2.902a.49.49 0 0 0 .083.59l.976.977a1 1 0 1 1-1.414 1.414l-.23-.23a.49.49 0 0 0-.803.16c-.706 1.778-1.166 3.543-1.262 4.886a.444.444 0 0 0 .479.478c2.23-.158 5.62-1.32 8.31-2.95a.487.487 0 0 0 .086-.763l-.58-.58a1 1 0 0 1 1.414-1.415l.888.888a.483.483 0 0 0 .676.015C15.328 15.184 16 14.09 16 13c0-3.5-1.5-5-5-5q-.303 0-.604.067c-.342.074-.42.495-.173.742l1.484 1.484a1 1 0 0 1-1.414 1.414zM17 8a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v.586l1.293-1.293a1 1 0 1 1 1.414 1.414L19.414 6H20a1 1 0 1 1 0 2z"
      />
    </svg>
  );
};
export default SvgCarrot;
