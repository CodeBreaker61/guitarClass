import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
const Toaster = (props) => {
  const { toastList, position, deleteTime } = props;
  const [isVisible, setIsVisible] = useState(true);
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, deleteTime);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  return (
    <>
      {isVisible ? (
        <div className={`toast-notification-container ${position}`}>
          <div
            className={`notification toast ${position}`}
            style={{ backgroundColor: toastList.backgroundColor }}
          >
            <div className="notification-message">{toastList.description}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Toaster;

// import React, { useState } from 'react';

// import './Toast.scss';

// type Props = {
//   toastList: {
//     description: string;
//     backgroundColor: string;
//   };
//   position: 'top-center';
//   deleteTime: number;
// };
// const Toaster = (props: Props) => {
//   const { toastList, position, deleteTime } = props;
//   const [isVisible, setIsVisible] = useState(true);

//   React.useEffect(() => {
//     if (isVisible) {
//       const timer = setTimeout(() => {
//         setIsVisible(false);
//       }, deleteTime);

//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [isVisible]);

//   return (
//     <>
//       {isVisible ? (
//         <div className={`toast-notification-container ${position}`}>
//           <div
//             className={`notification toast ${position}`}
//             style={{ backgroundColor: toastList.backgroundColor }}
//           >
//             <div className="notification-message">{toastList.description}</div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Toaster;
