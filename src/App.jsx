import React, { useState } from "react";
import Form from "./componenets/Form";
import Display from "./componenets/Display.jsx";

const App = () => {
  const [queue, setQueue] = useState([]);

  function addToQueue(customer) {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  }

  function updateStatus(id, serveStatus) {
    let updateStatus = queue.map((customer) =>
      customer.id === id ? { ...customer, status: serveStatus } : customer,
    );
    setQueue(updateStatus);
  }

  function deleteQueue(id) {
    const newVal = queue.filter((customer) => customer.id !== id);
    setQueue(newVal);
  }

  return (
    <>
      <div className="app">
        <header>
          <h1>Queue Management System</h1>
          <p>Manage customers Easily</p>
        </header>

        <main>
          <Form onAdd={addToQueue} />
          <Display
            queue={queue}
            updateStatus={updateStatus}
            deleteQueue={deleteQueue}
          />
        </main>
      </div>
    </>
  );
};

export default App;
