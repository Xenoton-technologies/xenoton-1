const COUNTERS = [
  { value: 8, suffix: "", label: "Core Services" },
  { value: 6, suffix: "", label: "Step Delivery Process" },
  { value: 25, suffix: "+", label: "Technologies We Use" },
  { value: 5, suffix: "", label: "Technology Domains" },
];

export function CounterSection() {
  return (
    <section className="hap-counter-section">
      <div className="hap-container">
        <div className="hap-counter-content grid grid-cols-1 md:grid-cols-2 min-[62rem]:grid-cols-4">
          {COUNTERS.map((item) => (
            <div key={item.label}>
              <div className="hap-counter-item">
                <h3>
                  <span className="counter" data-count={item.value}>
                    {item.value}
                  </span>
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
