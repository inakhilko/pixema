import { useFormContext } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { IGenre } from '../../redux/slices/Films';
import './Autocomplete.styles.css';

function FilterAutocomplete({ options, name }: { options: IGenre[], name: string }) {
  const { setValue, getValues } = useFormContext();
  const values = getValues(name);
  return (
    <Autocomplete
      className="autocomplete"
      multiple
      value={values}
      id="size-small-standard-multi"
      size="small"
      options={options}
      onChange={(_, value) => setValue(name, value)}
      getOptionLabel={(genre: IGenre) => genre.name}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Genre"
          placeholder="Genre"
        />
      )}
    />
  );
}

export default FilterAutocomplete;
