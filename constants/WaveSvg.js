import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import Colors from "./Colors";

function WaveSvg(props) {
  return (
    <Svg
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <Stop stopColor={Colors.background4} offset="0%" />
          <Stop stopColor={Colors.background5} offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#gradient)"
        d="M0 245l60 32.7c60 32.3 180 98.3 300 73.5C480 327 600 212 720 147s240-82 360-24.5 240 187.5 360 204.2c120 16.3 240-81.7 360-114.4 120-32.3 240-.3 360 0 120-.3 240-32.3 360 0 120 32.7 240 130.7 360 147 120 16.7 240-49.3 360-65.3s240 16 360-8.2c120-24.8 240-105.8 360-130.6 120-24.2 240 7.8 360 0 120-8.2 240-57.2 360-24.5 120 32.3 240 147.3 360 179.6 120 32.7 240-16.3 360-73.5 120-56.8 240-122.8 360-114.3 120 9.1 240 82 360 114.3 120 32.7 240 16 360 8.2c120-8.2 240-8.2 360-16.4 120-7.8 240-24.8 360-40.8 120-16 240-33 360-24.5s240 40.5 360 32.7c120-8.2 240-57.2 360-98C8400 65 8520 33 8580 16.3L8640 0v490H0z"
      />
      <Path
        fill="url(#gradient)"
        d="M0 343l60-40.8C120 261 240 180 360 187.8 480 196 600 294 720 294s240-98 360-122.5 240 24.5 360 40.8c120 16.7 240-.3 360 16.4 120 16.3 240 65.3 360 40.8s240-122.5 360-163.3C2640 65 2760 82 2880 89.8c120 8.2 240 8.2 360-8.1C3360 65 3480 33 3600 57.2 3720 82 3840 163 3960 228.7c120 65.3 240 114.3 360 138.8 120 24.5 240 24.5 360 32.7 120 7.8 240 24.8 360 32.6 120 8.2 240 8.2 360-65.3S5640 147 5760 81.7C5880 16 6000 33 6120 40.8c120 8.2 240 8.2 360 24.5 120 16.7 240 48.7 360 106.2s240 138.5 360 147 240-57.5 360-114.3c120-57.2 240-106.2 360-81.7s240 122.5 360 114.3c120-7.8 240-122.8 300-179.6L8640 0v490H0z"
        opacity={0.6}
        transform="translate(0, -50)"
      />
    </Svg>
  );
}

export default WaveSvg;