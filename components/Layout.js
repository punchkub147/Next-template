import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => {
  return (
    <div {...props} style={layoutStyle}>
      <Header />
      <div className="page">{props.children}</div>
    </div>
  );
};

export default Layout;
