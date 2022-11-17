import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

console.log(1111, qiankunWindow.__POWERED_BY_QIANKUN__);

renderWithQiankun({
  mount(props) {
    console.log("mount");
    ReactDOM.createRoot(document.getElementById("react") as HTMLElement).render(
      <App />
    );
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    const { container } = props;
    const mountRoot = container?.querySelector("#react");
    // ReactDOM.unmountComponentAtNode(
    //   mountRoot || document.querySelector("#root")
    // );
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  ReactDOM.createRoot(document.getElementById("react") as HTMLElement).render(
    <App />
  );
}
