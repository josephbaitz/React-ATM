const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = [`Deposit`, `Cash Back`];
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input type="number" onChange={onChange}></input>
        <input type="submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    const [accountState, setAccountState] = React.useState(0);
    var deposit = 0;
    const [isDeposit, setIsDeposit] = React.useState(true);

    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = event => {
      let newTotal = isDeposit ? accountState + deposit: accountState - deposit;
      alert(`Account total = ${newTotal}`);
      setAccountState(newTotal);
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Account Balance {accountState}</h2>
        <button onClick={() => setIsDeposit(true)}>Deposit</button>
        <button onClick={() => setIsDeposit(false)}>Cash Back</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
      </form>
    );
  };
  
  ReactDOM.render(<Account />, document.getElementById("root"));
  