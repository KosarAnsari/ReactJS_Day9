function Wrapper({children}) {
  const style = {
    border : "2px solid teal",
    padding : "20px",
    backgroundColor : "#f0f8ff",
    borderRadius : "10px",
    margin : "20px 0" 
  };
  return (
    <div style = {style}>{children}</div>
  );
}
export default Wrapper;
