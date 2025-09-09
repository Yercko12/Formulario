const Formulario = () => {
  return (
    <div className="general">
      <h1>Contact Us</h1>
      <form className="formulario">
        <div className="row">
          <div className="field">
            <label>First Name *</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Last Name *</label>
            <input type="text" />
          </div>
        </div>

        <div className="row">
          <div className="field full">
            <label>Email Address *</label>
            <input type="email" />
          </div>
        </div>

        <div className="row">
          <div className="field full">
            <label>Query Type *</label>
            <div className="options">
              <label>
                <input type="radio" name="query" /> General Enquiry
              </label>
              <label>
                <input type="radio" name="query" /> Support Request
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="field full">
            <label>Message *</label>
            <textarea></textarea>
          </div>
        </div>

        
        <div className="row checkbox">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent">I consent to being contacted by the team *</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
