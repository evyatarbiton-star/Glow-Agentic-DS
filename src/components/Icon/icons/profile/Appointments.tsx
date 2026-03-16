import type { SpecialtyIconProps } from "../../Icon.types";
const SvgAppointments = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="#FE9767" d="M4.198 4.505h22.988v6.568H4.198z" />
      <path
        fill="#000"
        d="M16.081 22.147a1.284 1.284 0 1 0 0-2.569 1.284 1.284 0 0 0 0 2.569M16.081 16.673a1.284 1.284 0 1 0 0-2.568 1.284 1.284 0 0 0 0 2.568M21.818 22.147a1.284 1.284 0 1 0 0-2.569 1.284 1.284 0 0 0 0 2.569M21.818 16.673a1.284 1.284 0 1 0 0-2.568 1.284 1.284 0 0 0 0 2.568M10.239 22.11a1.24 1.24 0 1 0 0-2.48 1.24 1.24 0 0 0 0 2.48M10.239 16.636a1.24 1.24 0 1 0 0-2.48 1.24 1.24 0 0 0 0 2.48"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.28}
        d="M21.319 6.105c-6 0-17.84-.32-18.8 0-1.2.4-.539 12-.539 14.8s-.4 6 0 6.4 9.6.8 13.6.8h11.6c.8 0 2-.4 2-2.8s.539-18.8.139-19.2c-.32-.32-4.005-.533-5.739-.4m0-2.8v4.8m-16.4-4.8c-.133 1.333-.32 4.24 0 5.2"
      />
    </svg>
  );
};
export default SvgAppointments;
