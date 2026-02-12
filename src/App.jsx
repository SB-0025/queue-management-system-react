import React, { useState, useEffect } from "react";
import Form from "./componenets/Form";
import Display from "./componenets/Display.jsx";
import FilterStatus from "./componenets/FilterStatus.jsx";
import Search from "./componenets/Search.jsx";

const App = () => {
  const [queue, setQueue] = useState(() => {
    const data = localStorage.getItem("queue");
    return data ? JSON.parse(data) : [];
  });
  const [filterStatus, setFilterStatus] = useState("");
  const [name, setName] = useState("");

  function addToQueue(customer) {
    setQueue((prev) => [
      ...prev,
      { ...customer, id: Date.now(), status: "waiting" },
    ]);
  }

  function updateStatus(id, serveStatus) {
    setQueue((prev) =>
      prev.map((customer) =>
        customer.id === id ? { ...customer, status: serveStatus } : customer,
      ),
    );
  }

  function deleteQueue(id) {
    const newVal = queue.filter((customer) => customer.id !== id);
    setQueue(newVal);
  }

  // Derived state: filtered view of queue based on selected status and name
  const filteredQueue = queue.filter(
    (customer) =>
      (filterStatus ? customer.status === filterStatus : true) &&
      (name ? customer.name.toLowerCase().includes(name.toLowerCase()) : true),
  );

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queue)); // as local storage can only store strings
  }, [queue]);

  return (
    <>
      <div className="app">
        <header>
          <h1>Queue Management System</h1>
          <p>Manage customers Easily</p>
        </header>

        <div>
          <FilterStatus
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
          />
          <Search name={name} setName={setName} />
        </div>

        <main>
          <Form onAdd={addToQueue} />
          <Display
            status={filterStatus}
            filteredQueue={filteredQueue}
            updateStatus={updateStatus}
            deleteQueue={deleteQueue}
          />
        </main>
      </div>
    </>
  );
};

export default App;
