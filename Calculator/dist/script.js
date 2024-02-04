function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "" });


  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  function doCalculator() {
    let total = parseInt(calc.total);
    switch (calc.preOp) {
      case "+":
        total = total + parseInt(calc.current);
        break;
      case "-":
        total = total - parseInt(calc.current);
        break;
      case "*":
        total = total * parseInt(calc.current);
        break;
      case "/":
        total = total / parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);}

    return total; // Vous devez retourner le résultat
  }

  function handleOperator(value) {
    const total = doCalculator();
    setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "" });

  }

  function renderDisplay() {
    return calc.current;
  }



  return /*#__PURE__*/(
    React.createElement("div", { className: "Calculator" }, /*#__PURE__*/
    React.createElement("div", { className: "display" }, renderDisplay()), /*#__PURE__*/
    React.createElement(CalculButton, { value: "7", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "8", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "9", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { className: "button operator", value: "/", onClick: handleOperator }), /*#__PURE__*/

    React.createElement(CalculButton, { value: "4", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "5", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "6", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { className: "button operator", value: "*", onClick: handleOperator }), /*#__PURE__*/

    React.createElement(CalculButton, { value: "1", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "2", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "3", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { className: "button operator", value: "-", onClick: handleOperator }), /*#__PURE__*/

    React.createElement(CalculButton, { value: "C", onClick: handleClear }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "0", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalculButton, { value: "=", onClick: handleOperator }), /*#__PURE__*/
    React.createElement(CalculButton, { className: "button operator", value: "+", onClick: handleOperator })));


}

function CalculButton(props) {
  return /*#__PURE__*/React.createElement("button", { className: props.className, onClick: () => props.onClick(props.value) }, props.value);
}

ReactDOM.render( /*#__PURE__*/React.createElement("div", { className: "app-container" }, /*#__PURE__*/React.createElement(Calculator, null)), document.getElementById("root"));