// Figma node-id: 4108:11364 — Facility (Small / Simplified)
import type { SpecialtyIconProps } from "../../Icon.types";

const FACILITY_SM_IMAGE = "data:image/png;base64,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";

const SvgFacilitySm = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 40 40"
      className={className}
      {...props}
    >
      <mask id="FacilitySm_svg__m0" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={9} y={12} width={22} height={29}>
        <path d="M30.2245 14.0663C30.1593 13.5825 30.0288 13.1042 29.7027 12.7292C29.3494 12.3107 28.8276 12.1857 28.3004 12.1476C23.0011 11.7835 17.7289 12.2291 12.4404 12.0607C11.511 12.028 10.3968 11.8976 9.63038 12.5444C9.14665 12.952 9.03794 13.5771 9.02707 14.1804C8.90206 22.0778 9.24448 29.9915 9.35318 37.8889L9.38036 39.7151C9.38036 39.7858 9.39667 39.8456 9.41841 39.8999C9.15208 40.2097 9.28252 40.8239 9.80974 40.8185C15.033 40.7587 20.2508 40.6989 25.4741 40.6391C26.9579 40.6228 28.4472 40.6065 29.931 40.5902C30.1049 40.5902 30.2408 40.5196 30.3278 40.4108C30.4908 40.3293 30.6213 40.1826 30.6267 39.9489C30.73 35.1985 30.6267 31.1166 30.5832 26.6977C30.5832 26.2629 30.7408 17.8166 30.2245 14.0608V14.0663Z" fill="white" />
      </mask>
      <g mask="url(#FacilitySm_svg__m0)">
        <mask id="FacilitySm_svg__m1" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={8} y={11} width={24} height={31}>
          <path d="M31.3498 11.3214H8.32617V41.4979H31.3498V11.3214Z" fill="white" />
        </mask>
        <g mask="url(#FacilitySm_svg__m1)">
          <rect x={8.1792} y={11.2562} width={23.2193} height={30.2634} fill="url(#FacilitySm_svg__p0)" />
        </g>
      </g>
      <path stroke="#000" strokeWidth={0.788028} strokeLinecap="round" strokeLinejoin="round" d="M27.7 15.8121C27.1274 15.7254 14.5951 15.5494 11.9814 15.8121V22.0007C12.5541 22.0874 25.0864 22.2634 27.7 22.0007V15.8121Z" />
      <path stroke="#000" strokeWidth={0.788028} strokeLinecap="round" strokeLinejoin="round" d="M16.9814 21.7431C17.0235 21.3491 17.1049 17.7899 16.9814 15.9932" />
      <path stroke="#000" strokeWidth={0.788028} strokeMiterlimit={10} strokeLinecap="round" d="M22.0471 21.5435C22.0891 20.7581 21.9814 17.1095 21.9814 16.3136" />
      <defs>
        <pattern id="FacilitySm_svg__p0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#FacilitySm_svg__img0" transform="scale(0.0113636 0.00862069)" />
        </pattern>
        <image id="FacilitySm_svg__img0" width={88} height={116} preserveAspectRatio="none" xlinkHref={FACILITY_SM_IMAGE} />
      </defs>
    </svg>
  );
};
export default SvgFacilitySm;
