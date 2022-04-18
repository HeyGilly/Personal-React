import {useReducer} from "react";

function CheckedBox() {
  const [checked, toggle] = useReducer( checked => !checked, false);
  return (
      <>
        <section className={'container'}>
          <input className={"box"} type={"checkbox"} value={checked} onChange={toggle} />
            &nbsp;
          { checked ? "Checked" : " Not Checked"}
        </section>
      </>
  );
}
export default CheckedBox;
