function Notifications({notifications, setNotifications}) {
  return (
    <div>
      <label htmlFor="notifications">Sign up for email notifications</label>
      <input 
        type="checkbox"
        id="notifications" 
        name="notifications" 
        onClick={() => setNotifications(!notifications)}
      />
    </div>
  )
}

export default Notifications;