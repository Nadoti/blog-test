import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";



export function Header({ onClick, searchByTitle, setSearchByTitle }) {
  
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  function handleOnChange({ target }) {
    setSearchByTitle(target.value)
  }

  return (
    <header className="w-full fixed bg-white py-4 shadow-xl z-10">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-2">
        <p className="text-4xl">Blog</p>
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
          value={searchByTitle}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onClick} size="medium">
                  <SearchIcon />
                </IconButton>
              </InputAdornment> 
            ),
          }}
        />
      </div>
    </header>
  )
}