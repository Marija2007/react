import React, { useState, Component } from 'react';
export const SignupFormFunctional = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', username: '', password: ''
  });
  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id='signup-functional'>
      <h2>4. Sign Up (Funkcionalna)</h2>
      <form style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
        <input name="firstName" placeholder="Ime" onChange={handleChange} value={formData.firstName} />
        <input name="lastName" placeholder="Prezime" onChange={handleChange} value={formData.lastName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <input name="username" placeholder="Korisnicko ime" onChange={handleChange} value={formData.username} />
        <input name="password" type="password" placeholder="Lozinka" onChange={handleChange} value={formData.password} />
      </form>
      
      <br />
      <button onClick={() => setShowTable(!showTable)}>
        {showTable ? "Skrij tabela" : "Prikazi tabela"}
      </button>

      {showTable && (
        <table border="1" style={{ marginTop: '15px', textAlign: 'left', width: '100%' }}>
          <thead>
            <tr>
              <th>Ime</th><th>Prezime</th><th>Email</th><th>Korisnicko ime</th><th>Lozinka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.firstName}</td>
              <td>{formData.lastName}</td>
              <td>{formData.email}</td>
              <td>{formData.username}</td>
              <td>{formData.password}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export class SignupFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { firstName: '', lastName: '', email: '', username: '', password: '' },
      showTable: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value }
    });
  };

  render() {
    const { formData, showTable } = this.state;

    return (
      <div id='signup-class'>
        <h2>4. Sign Up (Klasna)</h2>
        <form style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
          <input name="firstName" placeholder="Ime" onChange={this.handleChange} value={formData.firstName} />
          <input name="lastName" placeholder="Prezime" onChange={this.handleChange} value={formData.lastName} />
          <input name="email" placeholder="Email" onChange={this.handleChange} value={formData.email} />
          <input name="username" placeholder="Korisnicko ime" onChange={this.handleChange} value={formData.username} />
          <input name="password" type="password" placeholder="Lozinka" onChange={this.handleChange} value={formData.password} />
        </form>

        <br />
        <button onClick={() => this.setState({ showTable: !showTable })}>
          {showTable ? "Skrij tabela" : "Prikazi tabela"}
        </button>

        {showTable && (
          <table border="1" style={{ marginTop: '15px', textAlign: 'left', width: '100%' }}>
            <thead>
              <tr>
                <th>Ime</th><th>Prezime</th><th>Email</th><th>Korisnicko ime</th><th>Lozinka</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formData.firstName}</td>
                <td>{formData.lastName}</td>
                <td>{formData.email}</td>
                <td>{formData.username}</td>
                <td>{formData.password}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}