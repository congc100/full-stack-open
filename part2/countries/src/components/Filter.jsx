const Filter = ({ keyword, setKeyword }) => {
  return <>
    find countries <input value={keyword} onChange={e => setKeyword(e.target.value)} />
  </>
}

export default Filter