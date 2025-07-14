function TimeSetter({ label }) {
  return (
    <section className="time-setter">
      <h3>{label}</h3>
      <div className="time-setter-controls">
        <button>−</button>
        <span>25:00</span>
        <button>+</button>
      </div>
    </section>
  );
}
export default TimeSetter;

