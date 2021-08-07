import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import { SortBy } from 'app/pages/HomePage/types';

export interface Props {
  sortby: SortBy;
  handleSort: Function;
}

const useStyles = makeStyles({
  root: {
    borderBottom: 'solid 1px #d7d7d7',
  },
  italic: {
    textDecoration: 'italic',
  },
  formControl: {
    minWidth: 150,
  },
});

export const Sortbar = (prop: Props) => {
  const { sortby, handleSort } = prop;
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="sort-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          onChange={event => handleSort(event.target.value)}
          value={sortby}
        >
          <MenuItem value={SortBy.PRICE_HIGH_LOW}>Price (high-low)</MenuItem>
          <MenuItem value={SortBy.PRICE_LOW_HIGH}>Price (low-high)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
