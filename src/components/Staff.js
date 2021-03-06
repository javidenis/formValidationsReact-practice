function Staff({ staff, setStaff }) {
  return (
    <div>
      Staff: (Instructor or Student)
      <label htmlFor="student">Student</label>
      <input
        id="student"
        type="radio"
        onClick={(e) => setStaff(e.target.value)}
        value="student"
        name="staff"
      />
      <label htmlFor="instructor">Instructor</label>
      <input
        id="instructor"
        type="radio"
        onClick={(e) => setStaff(e.target.value)}
        value="instructor"
        name="staff"
      />
    </div>
  )
}

export default Staff;