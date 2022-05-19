function Name({name, setName}) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  )
}

export default Name;