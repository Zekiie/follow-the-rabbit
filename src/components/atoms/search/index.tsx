import React, { FC } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as styles from './search.module.css';

interface SearchInterface {
  isSearchBarOpen?: boolean;
}
const Search: FC<SearchInterface> = ({ isSearchBarOpen }) => (
  <Box
    className={styles.container}
    sx={isSearchBarOpen ? { width: 250 } : { width: 0 }}
  >
    {isSearchBarOpen && (
      <>
        <input className={styles.search} />
        <DeleteIcon className={styles.clearIcon} sx={{ fontSize: 25 }} />
      </>
    )}
  </Box>
);

export default Search;
