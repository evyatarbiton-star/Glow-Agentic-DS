import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCirclesBelowRectangle = ({
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
        d="M4.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M14.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M19.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4.568 4c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C2 6.07 2 6.316 2 6.568v5.864c0 .252 0 .498.017.706.019.229.063.499.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h14.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 0 0 .874-.874c.138-.271.182-.541.201-.77.017-.208.017-.454.017-.706V6.568c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C19.93 4 19.684 4 19.432 4z"
      />
    </svg>
  );
};
export default SvgCirclesBelowRectangle;
