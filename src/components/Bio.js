function Bio({bio, setBio}) {
  return (
    <div>
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        name="bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
      />
    </div>
  )
}

export default Bio;