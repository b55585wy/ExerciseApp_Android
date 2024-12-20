// app/assets/icons/logoMark.js
import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Logomark = ({ width = 41, height = 85 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 41 85" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8492 70.3721C19.8492 66.2868 23.4937 63.1899 27.2683 63.1899H35.273C38.527 63.1899 41 60.4884 41 57.3915V49.0891C41 45.7946 38.3317 43.2907 35.273 43.2907H26.7476C22.7127 43.2907 19.654 39.6008 19.654 35.7791V27.0814C19.654 22.9961 23.2984 19.8992 27.073 19.8992H35.273C38.527 19.8992 41 17.3953 41 14.1008V5.79845C41 2.50388 38.3317 0 35.273 0H27.3333C24.0794 0 21.6063 2.70155 21.6063 5.79845V14.1008C21.6063 17.9884 18.5476 21.6124 14.5127 21.6124H5.92222C2.66825 21.6124 0 24.314 0 27.4109V35.7132C0 39.0078 2.66825 41.5116 5.92222 41.5116H14.1222C17.9619 41.5116 21.5413 44.6085 21.5413 48.6938V57.5891C21.5413 61.4767 18.4825 65.1008 14.4476 65.1008H5.92222C2.66825 65.1008 0 67.8023 0 70.8992V79.0039C0 82.2984 2.66825 85 5.92222 85H14.1222C17.3762 85 20.0444 82.2984 20.0444 79.0039V70.3062H19.8492V70.3721Z"
        fill="url(#paint0_linear_2195_3643)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2195_3643"
          x1="20.5"
          y1="0"
          x2="20.5"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.226088" stopColor="#EB5C1F" />
          <Stop offset="0.261088" stopColor="#4f3422" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Logomark;