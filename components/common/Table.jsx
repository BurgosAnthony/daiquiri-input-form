/**
 * @file テーブルテンプレート
 * @desc テーブルを描画する
 * @namespace Table.jsx
 */


/* 1. React */
import React from 'react';

/* 2. 言語設定 */

/* 3. node_modules */
import DataTable from 'react-data-table-component';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 4. Material-UI */
import DisplayAlert from '@components/common/DisplayAlert';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';

/* 5. アイコン */
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

/* 6. 自作コンポーネント */

/* 7. 自作モジュール */
import { getTheme } from '@modules/style/colorTheme.js';

/* 8. css */


/**
 * テーブルテンプレート
 * @param {Array} props.data              - 表示するデータ
 * @param {Array} props.columns           - 表示するデータのカラム
 * @param {int} props.fontSize            - フォントサイズ
 * @param {int} props.defaultSortFieldId  - デフォルトでソートされるカラムのインデックス
 * @param {string} props.defaultSortAsc   - asc / desc
 * @return テーブルのHTML
 * @memberof Table.jsx
 */
function Table(props) {


  /* 1. 言語設定 */


  /* 2. props取得 */
  const data = props.data;
  const columns = props.columns;
  const fontSize = props.fontSize;
  const defaultSortFieldId = props.defaultSortFieldId ? props.defaultSortFieldId : 1;
  const defaultSortAsc = props.defaultSortAsc;


  /* 3. ステートフック */


  /* 4. Goからのデータ取得 */


  /* 5. 副作用フック */


  /* 6 .その他フック */


  /* 7. 関数 */


  /* 8. スタイル */
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: getTheme().colors.main,
        color: getTheme().colors.text.main,
        borderBottomColor: getTheme().colors.sidebar.main,
      },
    },
    head: {
      style: {
        fontSize: fontSize ? fontSize : 15,
        fontWeight: 400,
      }
    },
    headCells: {
      style: {
        paddingLeft: 4,
        paddingRight: 0,
      },
    },
    rows: {
      style: {
        minHeight: 40,
        backgroundColor: getTheme().colors.main,
        color: getTheme().colors.text.main,
        fontSize: fontSize ? fontSize : 15,
        fontWeight: 300,
        '&:not(:last-of-type)': {
          borderBottomColor: getTheme().colors.sidebar.main,
        },
      },
    },
    cells: {
      style: {
        paddingLeft: 4,
        paddingRight: 0,
      },
    },
    highlightOnHoverStyle: {
      color: getTheme().colors.text.main,
      backgroundColor: getTheme().colors.header + 'e6',
    },
  };

  /* 9. その他 */
  // pagination
  const customMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
    <TablePagination
      component='nav'
      count={rowCount}
      rowsPerPage={rowsPerPage}
      page={currentPage - 1}
      onPageChange={onChangePage}
      onRowsPerPageChange={({ target }) => onChangeRowsPerPage(Number(target.value))}
      ActionsComponent={TablePaginationActions}
    />
  );



  return (
    <div className='data-table'>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        paginationComponent={customMaterialPagination}
        sortIcon={<FontAwesomeIcon icon={faCaretDown} style={{marginLeft: 8}} />}
        defaultSortFieldId={defaultSortFieldId}
        defaultSortAsc={defaultSortAsc}
        highlightOnHover
        noDataComponent={<DisplayAlert code='warning-no-data' />}
      />
    </div>
  );
}


function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {

  const handleFirstPageButtonClick = () => {
    onPageChange(1);
  };

  const handleBackButtonClick = () => {
    onPageChange(page);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 2);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(getNumberOfPages(count, rowsPerPage));
  };

  const getNumberOfPages = () => {
    return Math.ceil( count / rowsPerPage );
  }


  return (
    <>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </>
  );
}


export default Table;
