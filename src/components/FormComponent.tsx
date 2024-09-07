import React, { useId } from "react";

const FormComponent: React.FC = () => {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  return (
    <div>
      <h3>Email Forms</h3>
      <form>
        <div>
          <label htmlFor={id1}>Email 1</label>
          <input id={id1} type="email" />
        </div>
        <div>
          <label htmlFor={id2}>Email 2</label>
          <input id={id2} type="email" />
        </div>
        <div>
          <label htmlFor={id3}>Email 3</label>
          <input id={id3} type="email" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
