import { Header, Footer } from ".";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "inherit"
};

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        {props.children}
      </div>
      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
};

export default Layout;
