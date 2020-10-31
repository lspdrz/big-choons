import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        className="h-full overflow-hidden"
        style={{
          // background: "rgb(254,215,226)",
          // background:
          //   "-moz-linear-gradient(0deg, rgba(254,215,226,1) 0%, rgba(247,250,252,1) 15%)",
          // background:
          //   "-webkit-linear-gradient(0deg, rgba(254,215,226,1) 0%, rgba(247,250,252,1) 15%)",
          background:
            "linear-gradient(0deg, rgba(233,216,253,1) 0%, rgba(255,255,255,1) 18%)",
        }}
      >
        <Head />
        <body className="h-full overflow-hidden">
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
