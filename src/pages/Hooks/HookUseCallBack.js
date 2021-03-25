import React, { useState, memo, useCallback } from "react";
import Comment from "./Comment";

//data tĩnh ko thay đổi dữ liệu thì để ở ngoài đây
//memo cho phép render khi giá trị có sự thay đổi 
export default function HookUseCallBack() {
    let [like, setLike] = useState(1);
    let renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`;
    };

    const callbackRenderNotify = useCallback(renderNotify, [like],
        )

    return (
        <div className="m-5">
    Like: {like} ♥
    <br />
    <span
      style={{ cursor: "pointer", color: "red", fontSize: 35 }}
      onClick={() => {
          setLike(like + 1);
        }}  
        >
      ♥
    </span>
    <br />
    <br />
    <Comment renderNotify={callbackRenderNotify} />
  </div>
);
}
//   let [like, setLike] = useState(1);
//   let [dislike, setDislike] = useState(1);
//   return (
//     <div className="m-5">
//       Like: {like} ♥
//       <br />
//       <span
//         style={{ cursor: "pointer", color: "red", fontSize: 35 }}
//         onClick={() => {
//           setLike(like + 1);
//         }}
//       >
//         ♥
//       </span>
//       <br />
//       <br />
//       <Comment like={dislike} />
//     </div>
//   );
