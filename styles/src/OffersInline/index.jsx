import {
  imageStyles,
  positionStyles,
  salaryStyles,
  tagStyles,
  wrapperStyles,
} from "./styles";

export const OffersInline = () => {
  return (
    <div style={wrapperStyles}>
      <div>
        <img src="" style={imageStyles} alt="image" />
      </div>
      <div>
        <p style={positionStyles}>Backend Dev</p>
        <p style={salaryStyles}>20000-30000zl</p>
        <p style={tagStyles}>amazon aws</p>
      </div>
    </div>
  );
};
