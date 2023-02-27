import { InputBase, styled } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { colorConfigs } from 'src/config/theme'
import { SearchBar as SearchBarDomain } from 'src/domain/searchBar/searchBar'
import { cocktailsAtom, searchedCocktailsAtom } from 'src/stores/atom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'background.default',
  border: `1px solid ${colorConfigs.text.secondary}`,
  marginLeft: 'auto',
  width: 150,
  [theme.breakpoints.up('sm')]: {
    marginLeft: 'auto',
    width: 'auto',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'primary.text',
  fontWeight: 'bold',
  fontSize: '20px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '20px',
    width: '100%',
  },
}))

export const SearchBar = () => {
  const cocktails = useAtomValue(cocktailsAtom)
  const setSearchedCocktails = useSetAtom(searchedCocktailsAtom)
  const [searchWord, setSearchWord] = useState('')

  const onChangeKeyword = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchWord(e.target.value)
  }, [])
  useEffect(() => {
    if (searchWord === '') {
      setSearchedCocktails(cocktails)
      return
    }
    const searchKeywords = SearchBarDomain.convertStrSearchKeyWordToArray(searchWord)
    if (searchKeywords === null) {
      setSearchedCocktails(cocktails)
      return
    }
    const result = SearchBarDomain.filterCocktailBySearchWord(cocktails, searchKeywords)

    setSearchedCocktails(result)
  }, [cocktails, searchWord, setSearchedCocktails])
  return (
    <Search>
      <StyledInputBase
        autoFocus={false}
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => onChangeKeyword(e)}
        value={searchWord}
      />
    </Search>
  )
}
