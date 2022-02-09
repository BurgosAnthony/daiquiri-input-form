/**
 * @file ボタン
 * @desc ボタンを表示する
 * @namespace TemplateButton.jsx
 */


/* 1. React */
import React from 'react';

/* 2. 言語設定 */

/* 3. node_modules */

/* 4. Material-UI */
import { makeStyles } from '@mui/styles';

/* 5. アイコン */
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';

/* 6. 自作コンポーネント */

/* 7. 自作モジュール */
import { getTheme, commonColors } from '@modules/style/colorTheme';

/* 8. css */


/**
 * メニューボタン
 * @param {string} props.title - ボタンの種別
 * @param {function} props.onClick - クリック時の挙動
 * @return ボタンのHTML
 * @memberof TemplateButton.jsx
 */
const TemplateButton = React.forwardRef(function FuncTemplateButton(props, ref) {


  /* 1. 言語設定 */


  /* 2. props取得 */
  const id = props.id;
  const title = props.title;
  const onClick = props.onClick;


  /* 3. ステートフック */


  /* 4. Goからのデータ取得 */


  /* 5. 副作用フック */


  /* 6 .その他フック */


  /* 7. 関数 */


  /* 8. スタイル */
  const bgColor = {
    'login': getTheme().colors.header,
    'save': getTheme().colors.button.save,
    'save-as-template': getTheme().colors.button['create-new'],
    'create-new': getTheme().colors.button['create-new'],
    'delete': getTheme().colors.button.delete,
    'submit': getTheme().colors.button.submit,
    'cancel': getTheme().colors.button.cancel,
    'close': getTheme().colors.button.cancel,
    'send': getTheme().colors.graph.main,
    'go-back': getTheme().colors.graph.main,
  };
  const textColor = {
    'login': getTheme().colors.text.main,
    'save': getTheme().colors.text.sub,
    'save-as-template': getTheme().colors.text.sub,
    'create-new': commonColors.white,
    'delete': commonColors.white,
    'submit': getTheme().colors.text.sub,
    'cancel': getTheme().colors.button.save,
    'close': getTheme().colors.button.save,
    'send': getTheme().colors.text.main,
    'go-back': getTheme().colors.text.main,
  };

  const useStyles = makeStyles({
    button: {
      margin: 8,
      padding: '0px 5px',
      minWidth: 100,
      width: 'fit-content',
      height: 45,
      cursor: 'pointer',
      borderRadius: 4,
      background: bgColor[title] ? bgColor[title] : getTheme().colors.button.submit,
      border: title == 'cancel' || title == 'close' ? '1px solid ' + getTheme().colors.button.save : 'none',
      color: textColor[title] ? textColor[title] : getTheme().colors.text.sub,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      '&:hover': {
        filter: 'brightness(0.9)',
      },
    },
  });
  const classes = useStyles();


  /* 9. その他 */
  const icon = {
    'create-new': (<AddIcon />),
    'delete': (<DeleteIcon />),
    'send-test': (<SendIcon />),
    'preview': (<VisibilityIcon />),
    'send': (<SendIcon />),
    'go-back': (<ArrowBackIcon />)
  };



  return (
    <div id={id} className={classes.button} onClick={onClick}>
      {icon[title]}&ensp;{title}
    </div>
  )
});


export default TemplateButton;
