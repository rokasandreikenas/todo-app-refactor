import { ColorRing } from "react-loader-spinner";

interface Props {
  width?: number;
  height?: number;
}

const Loader = ({ width = 40, height = 40 }: Props) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};

export default Loader;
