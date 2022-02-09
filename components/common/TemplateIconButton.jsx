/**
 * @file IconButtonテンプレート
 * @desc IconButtonテンプレートを表示する
 * @namespace TemplateIconButton.jsx
 */

/* 1. React */
import React from 'react';

/* 2. 言語設定 */

/* 3. node_modules */

/* 4. Material-UI */
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

/* 5. アイコン */

/* 6. 自作コンポーネント */

/* 7. 自作モジュール */

/* 8. css */

/**
 * IconButtonテンプレート
 * @param {json} props.IconButtonProps - IconButtonのprops
 * @param {json} props.TooltipProps - Tooltipのprops
 * @param {HTML} props.children - 表示するアイコン
 * @return IconButtonテンプレート
 * @memberof TemplateIconButton.jsx
 */
function TemplateIconButton(props) {

  const { TooltipProps, IconButtonProps, children } = props;

  return (
    <Tooltip enterDelay={400} leaveDelay={100} {...TooltipProps}>
      <span style={IconButtonProps.disabled ? { pointerEvents: "none" } : {}}>
      <IconButton {...IconButtonProps}>
        {children}
      </IconButton>
      </span>
    </Tooltip>
  )
}

export default TemplateIconButton;