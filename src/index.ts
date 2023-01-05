import "./index.css";
import type {
  HyperFunctionComponent,
  HfcProps,
} from "hyper-function-component";

const HFC: HyperFunctionComponent<HTMLButtonElement> = (
  container,
  initProps
) => {
  container.classList.add("uiv-button-ubeo8");
  const defaultSlot = document.createElement("div");
  container.appendChild(defaultSlot);
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.innerHTML = `<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>`
  container.appendChild(icon);

  function render(props: HfcProps) {
    if (props.events.onClick) {
      container.onclick = props.events.onClick;
    } else {
      if (container.onclick) {
        container.onclick = null;
      }
    }

    if (props.slots.default) {
      props.slots.default(defaultSlot);
    } else {
      defaultSlot.innerHTML = props.attrs.text || "";
    }
  }

  render(initProps);

  return {
    changed(props: HfcProps) {
      render(props);
    },
    disconnected() {},
  };
};

HFC.tag = "button";
// @ts-ignore
HFC.hfc = process.env.HFC_NAME;
// @ts-ignore
HFC.ver = process.env.HFC_VERSION;
// @ts-ignore
HFC.names = process.env.HFC_PROP_NAMES;

export default HFC;
