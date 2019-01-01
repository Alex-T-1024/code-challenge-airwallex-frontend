import React from 'react'
import styles from './index.less'

function Header() {
  return (
    <div className={styles.header}>
      <p>BROCCOLI & CO.</p>
      <svg
        width="110vw"
        height="140vh"
        viewBox="0 0 1798 1149"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="css-serkvg"
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Ax_HomePage_IntroSection_backgrounds_DesktopPath1_gradient"
          >
            <stop stopColor="#612FFF" offset="0%" />
            <stop stopColor="#D200A3" offset="20.5611151%" />
            <stop stopColor="#FF135F" offset="40.6791003%" />
            <stop stopColor="#FF4F42" offset="63.2305343%" />
            <stop stopColor="#FF8E3C" offset="81.777071%" />
            <stop stopColor="#FFC94C" offset="100%" />
          </linearGradient>
        </defs>
        <g
          id="Homepage"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            transform="translate(-720.000000, -222.000000)"
            fill="url(#Ax_HomePage_IntroSection_backgrounds_DesktopPath1_gradient)"
            fillRule="nonzero"
          >
            <path d="M974.869064,1326.9021 C935.188132,1366.96722 876.289158,1381.19882 822.692471,1363.67212 C769.095784,1346.14542 729.985337,1299.86367 721.643264,1244.0945 C713.301191,1188.32533 737.156932,1132.62496 783.279064,1100.1821 L1244.07906,776.282105 C1263.66678,762.309083 1287.7104,756.030335 1311.62906,758.642105 L2150.91906,846.572105 L1933.75906,593.572105 C1920.42317,577.83788 1915.14431,556.805624 1919.46944,536.638688 C1923.79456,516.471752 1937.23387,499.453905 1955.84906,490.572105 L2489.56906,224.362105 C2498.27056,219.486737 2509.27068,222.391653 2514.43052,230.927534 C2519.59037,239.463415 2517.05003,250.553393 2508.68906,255.992105 L2084.35906,560.712105 L2388.80906,890.492105 C2409.29402,912.66763 2414.71152,944.865279 2402.61146,972.523479 C2390.51141,1000.18168 2363.18826,1018.05578 2332.99906,1018.0621 L1339.49906,956.632105 L974.869064,1326.9021 Z" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Header
