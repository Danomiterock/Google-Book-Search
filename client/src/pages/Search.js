const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const [search, setSearch] = useState("Tom Clancy");
const [results, setResults] = useState({ items: [] });
const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }
const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl + search)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios
      .get(baseUrl + search)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <React.Fragment>
      <Container fluid className="text-center bg-info p-5 main-search-container">
        <h1>React Google Books Search</h1>
        <h4>Search for a Book</h4>
        <SearchForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          search={search}
        />
      </Container>
      <ResultsList results={results} />
    </React.Fragment>
  );


export default Search;