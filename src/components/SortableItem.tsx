import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Paper, Typography, rgbToHex } from "@mui/material";
import { useTheme } from "@mui/material";

export function SortableItem(props: { id: number; numVals: number }) {
  const theme = useTheme();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const wvMax = 700;
  const wvMin = 380;
  const colorCoolFactor = 1;

  // Some stack overflow gold right here
  // Shoutout @https://stackoverflow.com/questions/1472514/convert-light-frequency-to-rgb
  const waveLengthToRGB = (Wavelength: number): number[] => {
    const IntensityMax = 255;
    const Gamma = 0.8;
    let factor: number;
    let Red: number, Green: number, Blue: number;

    if (Wavelength >= 380 && Wavelength < 440) {
      Red = -(Wavelength - 440) / (440 - 380);
      Green = 0.0;
      Blue = 1.0;
    } else if (Wavelength >= 440 && Wavelength < 490) {
      Red = 0.0;
      Green = (Wavelength - 440) / (490 - 440);
      Blue = 1.0;
    } else if (Wavelength >= 490 && Wavelength < 510) {
      Red = 0.0;
      Green = 1.0;
      Blue = -(Wavelength - 510) / (510 - 490);
    } else if (Wavelength >= 510 && Wavelength < 580) {
      Red = (Wavelength - 510) / (580 - 510);
      Green = 1.0;
      Blue = 0.0;
    } else if (Wavelength >= 580 && Wavelength < 645) {
      Red = 1.0;
      Green = -(Wavelength - 645) / (645 - 580);
      Blue = 0.0;
    } else if (Wavelength >= 645 && Wavelength < 781) {
      Red = 1.0;
      Green = 0.0;
      Blue = 0.0;
    } else {
      Red = 0.0;
      Green = 0.0;
      Blue = 0.0;
    }

    if (Wavelength >= 380 && Wavelength < 420) {
      factor = 0.3 + (0.7 * (Wavelength - 380)) / (420 - 380);
    } else if (Wavelength >= 420 && Wavelength < 701) {
      factor = 1.0;
    } else if (Wavelength >= 701 && Wavelength < 781) {
      factor = 0.3 + (0.7 * (780 - Wavelength)) / (780 - 700);
    } else {
      factor = 0.0;
    }

    const rgb: number[] = [];

    rgb[0] =
      Red === 0.0
        ? 0
        : Math.round(IntensityMax * Math.pow(Red * factor, Gamma));
    rgb[1] =
      Green === 0.0
        ? 0
        : Math.round(IntensityMax * Math.pow(Green * factor, Gamma));
    rgb[2] =
      Blue === 0.0
        ? 0
        : Math.round(IntensityMax * Math.pow(Blue * factor, Gamma));

    return rgb;
  };

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  const rgb: number[] = waveLengthToRGB(
    380 + ((wvMax - wvMin) / props.numVals) * (props.numVals - props.id)
  ); // lil bit of math to convert range of x vals to wavelength from 380-700

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `${(100 / props.numVals) * props.id}%`,
          width: "100%",
          background: `rgb(${rgb[0] / colorCoolFactor}, ${
            rgb[1] / colorCoolFactor
          }, ${rgb[2] / colorCoolFactor})`,
          opacity: "0.8",
        }}
      >
        <Typography variant="h5" color={theme.palette.text.secondary}>
          {props.id}
        </Typography>
      </div>
    </div>
  );
}
