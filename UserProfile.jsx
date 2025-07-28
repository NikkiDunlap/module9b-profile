function UserProfile() 
{
    const name = "Jordan Rivers";
    const bio = "Creative technologist with a love for beautiful design and clean code.";
    const image = "https://randomuser.me/api/portraits/men/32.jpg";

  
    return (
      <div style={{
        maxWidth: '420px',
        margin: '40px auto',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #eee',
            marginBottom: '16px'
          }} 
        />
        <h1 style={{ fontSize: '22px', marginBottom: '8px' }}>{name}</h1>
        <p style={{ fontSize: '16px', color: '#666' }}>{bio}</p>
      </div>
    );
}
  
  export default UserProfile;
  