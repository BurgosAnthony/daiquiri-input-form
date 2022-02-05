
// List component
import List from '@components/common/List';

export default function InputFormList() {
  const tableData = [
    {name: 'Input form 1', createTime: '2022-01-01 00:00:00', updateTime: '2022-01-14 00:00:00'},
    {name: 'Input form 2', createTime: '2022-02-01 00:00:00', updateTime: '2022-02-21 00:00:00'},
    {name: 'Input form 3', createTime: '2022-03-01 00:00:00', updateTime: '2022-03-28 00:00:00'}
  ];

  const tableColumns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Create Time',
      selector: row => row.createTime,
      sortable: true,
    },
    {
      name: 'Update Time',
      selector: row => row.updateTime,
      sortable: true,
    },
  ];

  return(
    <List
      tableData={tableData} 
      tableColumns={tableColumns}
      creationUrl='/input-form/create-new'
    />
  );
}