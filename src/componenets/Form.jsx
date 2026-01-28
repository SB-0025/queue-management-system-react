import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // validation
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  }

  return (
    <>
      <section className="queue-form">
        <h2>Queue Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option disabled value="">
                Select Services
              </option>
              <option value="payment">Payment</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="display">Display</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          <button type="submit">Add to Queue</button>
        </form>
      </section>
    </>
  );
};

export default Form;
