/**
 * @file アラート
 * @desc アラートを表示する
 * @namespace DisplayAlert.jsx
 */


/* 1. React */
import React from 'react';

/* 2. 言語設定 */

/* 3. node_modules */

/* 4. Material-UI */
import Alert from '@mui/material/Alert';

/* 5. アイコン */

/* 6. 自作コンポーネント */

/* 7. 自作モジュール */

/* 8. css */

/* 9. その他 */


/**
 * アラート
 * @param {string} props.code - メッセージコード
 * @return アラートのHTML
 * @memberof DisplayAlert.jsx
 */
function DisplayAlert(props) {

  /* 1. 言語設定 */


  /* 2. props取得 */
  const code = props.code;
  const status = code.split('-')[0];


  /* 3. ステートフック */


  /* 4. Goからのデータ取得 */


  /* 5. 副作用フック */


  /* 6 .その他フック */


  /* 7. 関数 */


  /* 8. スタイル */


  /* 9. その他 */



  return (
    <div className='alert'>
      <Alert severity={status}>
        {code}
      </Alert>
    </div>
  );
}

export default DisplayAlert;
