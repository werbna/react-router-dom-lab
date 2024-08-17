import { useState } from "react";

const MailboxForm = ({addBox}) => {
  const [boxholder, setBoxHolder] = useState('')
  const [boxSize, setBoxSize] = useState('Small')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox ({ boxholder,boxSize })
    setBoxHolder('');
    setBoxSize('Small')
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <div>
        <label>Boxholder Name:</label>
        <input type="text"
        value={boxholder}
        onChange={(evt) => setBoxHolder(evt.target.value)}
        required/>
      </div>
      <div>
        <label>Box Size:</label>
        <select name="boxSize" id="BoxSize" value={boxSize} onChange={(evt) => setBoxSize(evt.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <button type="submit">Create Mailbox</button>
    </form>
  );
}

export default MailboxForm;