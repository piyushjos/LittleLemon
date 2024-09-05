const BookingConfirmation = () => {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        backgroundColor: '#f0f0f0' 
      }}>
        <h1 style={{ 
          color: '#4caf50', 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}>
          Booking Confirmed!
        </h1>
        <p style={{ 
          color: '#555', 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          marginTop: '1rem' 
        }}>
          Thank you for booking with us. Your reservation has been confirmed.
        </p>
      </div>
    );
  };
  
  export default BookingConfirmation;
  