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

  