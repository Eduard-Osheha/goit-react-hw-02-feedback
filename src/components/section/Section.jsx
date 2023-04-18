const Section = ({ title, children }) => (
  <section
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
