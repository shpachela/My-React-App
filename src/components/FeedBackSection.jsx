import Button from "./Button/Button";
import React, { useState, useRef } from 'react';



function StateVsRev() {
  const input = useRef()
  const [show, setShow] = useState(false);
  function hadleKeyDown(event) {
    if (event.key == 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={hadleKeyDown}
        className="control" />
    </div>
  )
}

export default function FeedBackSecrion() {
  const [form, setForm] = useState(
    {
      name: '',
      hasError: false,
      reason: 'help'
    }
  );
  // const [name, setName] = useState('')
  // const [reason, setReason] = useState('help')
  // const [hasError, setHasError] = useState(true);

  function handleNameChange(event) {
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0
    }))
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Ваше имя</label>
        <input type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : null
          }}
          onChange={handleNameChange} />
        <label htmlFor="reason">Причина обращения</label>

        <select name="" id="reason" className="control" value={form.reason} onChange={(event) => setForm(prev => ({ ...prev, reason: event.target.value }))}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        {/* <pre>
            {JSON.stringify(form, null, 2)}
          </pre> */}


        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>
      <hr />
      <StateVsRev />
    </section>
  );
}