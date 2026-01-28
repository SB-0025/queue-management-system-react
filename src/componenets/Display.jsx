import React from "react";

const Display = ({ queue, updateStatus, deleteQueue }) => {
  // console.log(data);

  return (
    <>
      <section className="queue-display">
        <h2>Queue Display</h2>

        {queue.length === 0 ? (
          <p className="empty-queue">No Customer Data</p>
        ) : (
          <div className="queue-list">
            {queue.map((customer) => (
              <div className="queue-item" key={customer.id}>
                <div className="customer-info">
                  <h3>{customer.name}</h3>
                  <p>Service: {customer.service}</p>
                  <p className="status">Status: {customer.status}</p>
                </div>

                <div className="actions">
                  {customer.status === "waiting" && (
                    <button
                      className="serve-btn"
                      onClick={() => updateStatus(customer.id, "serving")}
                    >
                      Serve
                    </button>
                  )}

                  {customer.status === "serving" && (
                    <button
                      className="complete-btn"
                      onClick={() => updateStatus(customer.id, "complete")}
                    >
                      Complete
                    </button>
                  )}

                  <button
                    className="remove-btn"
                    onClick={() => deleteQueue(customer.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Display;
