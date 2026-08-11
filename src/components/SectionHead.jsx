/** The numbered kicker + condensed heading + lead paragraph that opens every section. */
export default function SectionHead({ kicker, title, children }) {
  return (
    <div className="u-head">
      <div>
        <div className="u-kicker">{kicker}</div>
        <h2 className="u-h2">{title}</h2>
      </div>
      <p className="u-lead">{children}</p>
    </div>
  );
}
