import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPointerRight = ({
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
        d="M11 2a1 1 0 0 0-1 1v17H9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1V3a1 1 0 0 0-1-1"
      />
      <path
        fill={color}
        d="M16.053 5.05C15.828 5 15.6 5 15.42 5H6.568c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.2 2 2 0 0 0-.874.875 2 2 0 0 0-.201.77C4 7.07 4 7.316 4 7.568v2.864c0 .252 0 .498.017.706.019.229.063.498.201.77a2 2 0 0 0 .874.874c.271.138.541.182.77.201.208.017.454.017.706.017h8.852c.18 0 .408.001.633-.05.194-.045.382-.118.555-.218.2-.116.366-.27.498-.394l.035-.033 2.156-2.003c.094-.087.204-.189.293-.287.102-.112.241-.286.325-.53a1.5 1.5 0 0 0 0-.97 1.5 1.5 0 0 0-.325-.53c-.089-.098-.2-.2-.293-.287l-2.156-2.003-.035-.033c-.132-.123-.299-.278-.498-.394q-.261-.15-.555-.218"
      />
    </svg>
  );
};
export default SvgPointerRight;
