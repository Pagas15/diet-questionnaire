import React from 'react';

const Icon = ({ type, style }) => {
  const icon = {
    arrowLeft: (
      <svg
        width={17}
        height={16}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.292893 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292893 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM16.0564 9H1V7L16.0564 7V9Z"
          fill="white"
        />
      </svg>
    ),
    doubleArrowDown: (
      <svg
        style={style}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="#3D44FF"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.0017 42.4505L44.6202 22.9518C45.85 21.7212 47.8477 21.7212 49.0776 22.9518C50.3075 24.1823 50.3075 26.1743 49.0776 27.4016L27.2303 49.1126C26.0474 50.2927 23.9589 50.2989 22.7697 49.1126L0.922453 27.3985C-0.307422 26.1711 -0.307422 24.176 0.922453 22.9486C2.15233 21.7181 4.15001 21.7181 5.37988 22.9486L25.0017 42.4505L25.0017 42.4505Z"
          fill="inherit"
        />
        <path
          d="M25.0017 20.4217L44.6202 0.922901C45.85 -0.307608 47.8477 -0.307608 49.0776 0.922901C50.3075 2.15341 50.3075 4.14542 49.0776 5.37278L27.2303 27.0838C26.0474 28.2638 23.9589 28.2701 22.7697 27.0838L0.922453 5.37278C-0.307422 4.14227 -0.307422 2.15026 0.922453 0.9229C2.15233 -0.307609 4.15001 -0.307609 5.37988 0.9229L25.0017 20.4217L25.0017 20.4217Z"
          fill="inherit"
        />
      </svg>
    ),
    doubleArrowTop: (
      <svg
        style={style}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="#1E1E1E"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_94)">
          <path
            d="M25.0017 7.5495L44.6202 27.0482C45.85 28.2788 47.8477 28.2788 49.0776 27.0482C50.3075 25.8177 50.3075 23.8257 49.0776 22.5984L27.2303 0.887373C26.0474 -0.292656 23.9589 -0.298921 22.7698 0.887373L0.922451 22.6015C-0.307422 23.8289 -0.307422 25.824 0.922451 27.0514C2.15233 28.2819 4.15001 28.2819 5.37988 27.0514L25.0017 7.5495L25.0017 7.5495Z"
            fill="inherit"
          />
          <path
            d="M25.0017 29.5783L44.6201 49.0771C45.85 50.3076 47.8477 50.3076 49.0776 49.0771C50.3074 47.8466 50.3074 45.8546 49.0776 44.6272L27.2303 22.9162C26.0473 21.7362 23.9589 21.7299 22.7697 22.9162L0.922419 44.6272C-0.307455 45.8577 -0.307455 47.8497 0.922419 49.0771C2.1523 50.3076 4.14997 50.3076 5.37985 49.0771L25.0017 29.5783L25.0017 29.5783Z"
            fill="inherit"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_94">
            <rect width={50} height={50} fill="white" transform="translate(50) rotate(90)" />
          </clipPath>
        </defs>
      </svg>
    ),
    doubleArrowRight: (
      <svg
        style={style}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#AB1CA4"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.9802 10.0007L9.1807 17.8481C8.6885 18.34 8.6885 19.1391 9.1807 19.631C9.6729 20.123 10.4697 20.123 10.9607 19.631L19.6451 10.8921C20.1171 10.419 20.1196 9.58356 19.6451 9.1079L10.9594 0.368982C10.4685 -0.122968 9.67039 -0.122968 9.17944 0.368981C8.68724 0.860932 8.68724 1.66 9.17944 2.15195L16.9802 10.0007L16.9802 10.0007Z"
          fill="inherit"
        />
        <path
          d="M8.16866 10.0007L0.369163 17.848C-0.123041 18.34 -0.123041 19.1391 0.369163 19.631C0.861366 20.123 1.65817 20.123 2.14911 19.631L10.8335 10.8921C11.3055 10.4189 11.308 9.58355 10.8335 9.10789L2.14912 0.368966C1.65691 -0.122984 0.86011 -0.122984 0.369164 0.368966C-0.123039 0.860916 -0.123039 1.65999 0.369164 2.15194L8.16866 10.0007Z"
          fill="inherit"
        />
      </svg>
    ),
    checkMark: (
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.7234 0.459327C21.3574 0.0920006 20.7573 0.0920006 20.3913 0.459327L9.31098 11.537L3.60464 5.79161C3.23866 5.42294 2.6426 5.42294 2.27393 5.79161L0.274486 7.78971C-0.0914952 8.15434 -0.0914952 8.75444 0.274486 9.12177L8.63957 17.542C9.00555 17.9067 9.60161 17.9067 9.97163 17.542L23.7215 3.79083C24.0928 3.4235 24.0928 2.82206 23.7215 2.45338L21.7234 0.459327Z"
          fill="white"
        />
      </svg>
    ),
  };
  return icon[type];
};

export default Icon;