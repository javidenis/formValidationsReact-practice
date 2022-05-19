function Email({ email, setEmail }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>
  )
}

export default Email;