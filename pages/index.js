import Router from "next/router";

const Index = () => null;

Index.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: `/login`,
    });
    res.end();
  } else Router.push(`/login`);

  return {};
};

export default Index;
