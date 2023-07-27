import Typography from '@mui/material/Typography'

import AppBar from '@/src/AppBar'
import SelectTable from '@/src/SelectTable'

const AddNewList = () => {
  return (
    <>
      <AppBar title="Creating new list" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Name of new list:
      </Typography>

      <SelectTable />
    </>
  )
}

export default AddNewList
