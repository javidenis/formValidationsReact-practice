function Phone({ phone, setPhone, phoneType, setPhoneType }) {
  return (
    <div>
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        type="text"
        placeholder="XXX-XXX-XXXX"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <select
        name="phoneType"
        onChange={(e) => setPhoneType(e.target.value)}
        value={phoneType}
      >
        <option value="" disabled>
          Select a phone type...
        </option>
        <option>Home</option>
        <option>Work</option>
        <option>Mobile</option>
      </select>
    </div>
  )
}

export default Phone;