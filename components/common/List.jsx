/**
 * @file 一覧画面テンプレート
 * @desc 一覧画面のテンプレートファイル
 * @namespace List.jsx
 */

/* 1. React */
import React from 'react';

/* 2. 言語設定 */

/* 3. node_modules */
import Link from 'next/link';
import { useRouter } from 'next/router'

/* 4. Material-UI */
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

/* 5. アイコン */
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PrintIcon from '@mui/icons-material/Print';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

/* 6. 自作コンポーネント */
import Table from '@components/common/Table';
import TemplateButton from '@components/common/TemplateButton';
import TemplateIconButton from '@components/common/TemplateIconButton';

/* 7. 自作モジュール */
import {getTheme} from '@modules/style/colorTheme.js';

/* 8. css */

/**
 * 一覧画面テンプレート
 * @return 一覧画面テンプレート
 * @memberof List.jsx
 */
function List(props) {

  /* 1. 言語設定 */

  /* 2. Goからのデータ取得 */

  /* 3. props取得 */
  const {
    tableData, 
    tableColumns,
    creationUrl,
    filter,
    columnSelection,
    download,
    print,
    leftMenuItem,
    rightMenuItem,
    TableProps
  } = props;

  /* 4. ステートフック */
  // 列選択
  const [openPopper, setOpenPopper] = React.useState('');

  const [selectColumnList, setSelectColumnList] = React.useState(
    tableColumns.filter(column => column.name).map(column => column.name)
  );
  const handleSelectColumnList = (event) => {
    const tmp = [...selectColumnList];

    const toggleIdx = tmp.indexOf(event.target.value);
    if(toggleIdx >= 0) {
      tmp.splice(toggleIdx, 1);
    } else {
      tmp.push(event.target.value);
    }

    setSelectColumnList(tmp);
  }

  const [displayTableColumns, setDisplayTableColumns] = React.useState(tableColumns);

  /* 5. 副作用フック */
  React.useEffect(() => {
    const tmp = [];
    for(const column of tableColumns) {
      if(selectColumnList.includes(column.name) || column.name === '') {
        tmp.push(column);
      }
    }
    setDisplayTableColumns(tmp);
  }, [selectColumnList]);

  /* 6. その他フック */
  const router = useRouter();

  /* 7. 関数 */

  /* 8. スタイル */
  const useStyles = makeStyles((theme) => ({
    paper: {
      width: '400px',
      padding: '16px',
      backgroundColor: getTheme().colors.main,
      color: getTheme().colors.text.main,
      '& > *': {
        margin: '8px'
      }
    },
    divider: {
      margin: 8,
      backgroundColor: getTheme().colors.header,
    }
  }));
  const classes = useStyles();

  /* 9. その他 */

  return (
    <>
      {/* テーブル上部のメニュー */}
      <Box display='flex' alignItems='center'>

        {/* 左部メニュー */}
        {typeof creationUrl !== 'undefined' &&
          <Box>
            <Link href={creationUrl} passHref>
              <a>
                <TemplateButton id='create-new-button' title='create-new'/>
              </a>
            </Link>
          </Box>
        }

        {leftMenuItem && leftMenuItem.map((item, idx) => (
          <Box key={idx}>
            {item}
          </Box>
        ))}

        {/* 中央のパディング */}
        <Box flexGrow={1}>
        </Box>

        {/* 右部メニュー */}
        {filter &&
          <Box>
            <TemplateIconButton
              TooltipProps={{title: 'filter'}}
              IconButtonProps={{id: 'filter-icon'}}
            >
              <FilterAltIcon />
            </TemplateIconButton>
          </Box>
        }
        {columnSelection &&
          <>
            <TemplateIconButton
              TooltipProps={{title: 'select-column'}}
              IconButtonProps={{id: 'select-column-icon'}}
            >
              <ViewColumnIcon/>
            </TemplateIconButton>
          </>
        }
        {download &&
          <Box>
            <TemplateIconButton
              TooltipProps={{title: 'download-csv'}}
              IconButtonProps={{id: 'download-csv-icon', onClick: () => downloadCSV(router.pathname, tableData, tableColumns)}}
            >
              <CloudDownloadIcon />
            </TemplateIconButton>            
          </Box>
        }
        {print &&
          <Box>
            <TemplateIconButton
              TooltipProps={{title: 'print'}}
              IconButtonProps={{id: 'print-icon'}}
            >
              <PrintIcon />
            </TemplateIconButton>
          </Box>
        }
        {rightMenuItem && rightMenuItem.map((item, idx) => (
          <Box key={idx}>
            {item}
          </Box>
        ))}
      </Box>

      {/* 一覧表示 */}
      <Table
        data={tableData}
        columns={displayTableColumns}
        {...TableProps}
      />
    </>
  );
}

export default List;