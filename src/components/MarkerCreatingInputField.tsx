import { Box, Autocomplete, TextField, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useShapeMarkers } from './providers/ShapeMarkerProvider'

export const MarkerCreatingInputField = () => {
  const { inputValues, islands, validation, handleInputChange, handleAddButtonClick } =
    useShapeMarkers()

  return (
    <Box py={3}>
      <Autocomplete
        multiple
        freeSolo
        filterSelectedOptions
        options={islands}
        value={inputValues}
        onChange={handleInputChange}
        sx={{
          width: 600,
          display: 'inline-block',
        }}
        renderInput={params => (
          <TextField
            {...params}
            variant='standard'
            label='離島マーカーを作る'
            placeholder='離島名を選択か、入力後に「Enter」でタグが表示。「＋」でマーカーを作成'
            error={validation.error}
            helperText={validation.message}
          />
        )}
      />
      <IconButton onClick={handleAddButtonClick}>
        <AddCircleIcon color='primary' fontSize='large' />
      </IconButton>
    </Box>
  )
}
