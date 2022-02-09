/**
 * @file カラーテーマを管理するjs
 * @desc カラーテーマを管理するjs
 * @namespace colorTheme.js
 */

/*
使い方
1. 以下を追加
import { makeStyles } from '@mui/styles';
import {getTheme, getCssProperties} from '@modules/style/colorTheme.js';

// 以下を使いたいコンポーネントに追加
const colorTheme = localStorage.getItem('colorTheme') ? localStorage.getItem('colorTheme') : 'normal';

const classes = (makeStyles((theme) => ({
  // CssPropertiesを付与
  mainContent: getCssProperties(colorTheme),
}))());

2. CSSでの使い方
前処理として対象のコンポーネント内の最上位のタグ(main-contentが多そう)に className={mainContent}を追加する
CSSファイルで色を呼び出す際には以下のように指定
color: var(--header);

3. JSでの使い方
getTheme(colorTheme)でカラーテーマオブジェクトを取得できる
JSで色を呼び出す際には以下のように使用
const usingTheme = getTheme(colorTheme);
const headerColor = usingTheme.colors.header;
*/

const themeList = [
  {
    "name": "color-theme-normal",
    "value": "normal",
    "mode": "light",
    "colors": {
      "header": "#e6e6e6",
      "main": "#ffffff",
      "sidebar": {
        "main": "#a9a9a9",
        "selected": "#d9d9d9",
      },
      "button": {
        "save": "#808080",
        "create-new": "#7ea8cb", // graph-subと同じ
        "delete": "#ffc04d",
        "submit": "#808080",
        "cancel": "#ffffff", // mainと同じ
        "input": "#4682b4",
      },
      "graph": {
        "main": "#b5cde1",
        "sub": "#7ea8cb",
      },
      "text": {
        "main": "#333333",
        "secondary": "#222222",
        "sub": "#ffffff",
      },
      "icon": {
        "main": "#00000088",
        "sub": "#ffffff",
        "disabled": "#dcdcdc",
      },
      "accent": {
        "main":"#4682b4",
        "transparent": "#4682b426"
      },
      "disabled": "#d6d6d6",
      "error": "#f2622e",
      "warning": "#ffc04d",
      "info": "#528c7c",
      "success": "#528c7c",

      "journey": {
        "gridline": "#f3f3f3",
        "stage-box": "#0000001a",
      }
    }
  },
  {
    "name": "color-theme-dark",
    "value": "dark",
    "mode": "dark",
    "colors": {
      "header": "#525252",
      "main": "#333333",
      "sidebar": {
        "main": "#858585",
        "selected": "#707070",
      },
      "button": {
        "save": "#999999",
        "create-new": "#ff571a", // graph-subと同じ(仮)
        "delete": "#ffc04d",
        "submit": "#999999",
        "cancel": "#333333", // mainと同じ
        "input": "#ff7f50",
      },
      "text": {
        "main": "#ffffff",
        "secondary": "#dddddd",
        "sub": "#000000",
      },
      "graph": {
        "main": "#ff7c4d",
        "sub": "#ff571a",
      },
      "icon": {
        "main": "#dddddd",
        "sub": "#696969",
        "disabled": "#dcdcdc",
      },
      "accent": {
        "main": "#ff4500",
        "transparent": "#ff450026"
      },
      "disabled": "#d6d6d6",
      "error": "#f2622e",
      "warning": "#ffc04d",
      "info": "#528c7c",
      "success": "#528c7c",

      "journey": {
        "gridline": "#0c0c0c",
        "stage-box": "#ffffff30",
      }
    }
  }
];

// 共通色
const commonColors = {
  black: '#000000',
  white: '#ffffff',
}

/**
 * valueからカラーテーマのオブジェクトを取得する
 * @param {string} value - カラーテーマのvalue
 * @return カラーテーマのオブジェクト
 * @memberof colorTheme.js
 */
function getTheme(value = 'normal') {
  let resultTheme;
  themeList.forEach((theme) => {
    if(theme.value === value) {
      resultTheme = theme;
      return;
    }
  })
  return resultTheme;
}

/**
 * valueからカラーテーマのCSSプロパティを取得する
 * @param {string} value - カラーテーマのvalue
 * @return カラーテーマのCSSプロパティオブジェクト
 * @memberof colorTheme.js
 */
function getCssProperties(value = 'normal') {
  if(typeof window !== 'undefined') {
    const theme = getTheme(value);
    return {
      '--header': theme.colors.header,
      '--main': theme.colors.main,
      '--sidebar-main': theme.colors.sidebar.main,
      '--sidebar-selected': theme.colors.sidebar.selected,
      '--button-save': theme.colors.button.save,
      '--button-create-new': theme.colors.button['create-new'],
      '--button-delete': theme.colors.button.delete,
      '--button-submit': theme.colors.button.submit,
      '--button-cancel': theme.colors.button.cancel,
      '--button-input': theme.colors.button.input,
      '--graph-main': theme.colors.graph.main,
      '--graph-sub': theme.colors.graph.sub,
      '--text-main': theme.colors.text.main,
      '--text-secondary': theme.colors.text.secondary,
      '--text-sub': theme.colors.text.sub,
      '--icon-main': theme.colors.icon.main,
      '--icon-sub': theme.colors.icon.sub,
      '--icon-disabled': theme.colors.icon.disabled,
      '--accent': theme.colors.accent.main,
      '--accent-transparent': theme.colors.accent.transparent,
      '--disabled': theme.colors.disabled,
      '--error': theme.colors.error,
      '--warning': theme.colors.warning,
      '--info': theme.colors.info,
      '--success': theme.colors.success,

      '--journey-gridline': theme.colors.journey.gridline,
      '--journey-stage-box': theme.colors.journey['stage-box'],
    }
  }
}

/**
 * 明度の高い/低い色を作成する
 * @param {string} color - カラーコード
 * @param {string} mode - カラーテーマのベース明度 dark/light
 * @param {int} level - 引数のカラーコードから明るく/暗くする段階
 * @return level * 16段階明度を落としたカラーコード
 * @memberof colorTheme.js
 */
function changeBrightness(color, mode, level) {
  const alphaValue = color.length > 7 ? color.slice(7, 9) : '';
  if (mode === 'dark') {
    const red = parseInt(color.slice(1, 3), 16) + (level * 16) <= 255 ? (parseInt(color.slice(1, 3), 16) + (level * 16)).toString(16) : 'ff';
    const green = parseInt(color.slice(3, 5), 16) + (level * 16) <= 255 ? (parseInt(color.slice(3, 5), 16) + (level * 16)).toString(16) : 'ff';
    const blue = parseInt(color.slice(5, 7), 16) + (level * 16) <= 255 ? (parseInt(color.slice(5, 7), 16) + (level * 16)).toString(16) : 'ff';
    return `#${red}${green}${blue}${alphaValue}`;
  } else if(mode === 'light') {
    const red = parseInt(color.slice(1, 3), 16) - (level * 16) >= 0 ? (parseInt(color.slice(1, 3), 16) - (level * 16)).toString(16) : '00';
    const green = parseInt(color.slice(3, 5), 16) - (level * 16) >= 0 ? (parseInt(color.slice(3, 5), 16) - (level * 16)).toString(16) : '00';
    const blue = parseInt(color.slice(5, 7), 16) - (level * 16) >= 0 ? (parseInt(color.slice(5, 7), 16) - (level * 16)).toString(16) : '00';
    return '#' + red + green + blue + alphaValue;
  }
}

/**
 * ローカルストレージからカラーテーマの名前を取得
 * @return カラーテーマの名前
 * @memberof colorTheme.js
 */
function getThemeName() {
  return localStorage.getItem('colorTheme') !== null ? localStorage.getItem('colorTheme') : 'normal';
}

export {themeList, commonColors, getTheme, getCssProperties, changeBrightness, getThemeName};
