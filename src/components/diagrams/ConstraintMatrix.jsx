/* Which constraints actually bind, by vertical. Read off the pack copy in
   Verticals.jsx, so the grid and the prose cannot drift apart. This is the
   section's real point — every industry is a different planning problem —
   which the six paragraphs only implied. */

const CONSTRAINTS = ['Capacity', 'Material', 'Shelf life', 'Sequencing', 'Yield', 'Subcontract'];

const LEVELS = ['rarely binds', 'sometimes binds', 'binds hard'];

const ROWS = [
  { vertical: 'Auto components', levels: [2, 2, 0, 2, 0, 1] },
  { vertical: 'Food & beverage / FMCG', levels: [1, 2, 2, 2, 0, 0] },
  { vertical: 'Chemicals', levels: [2, 1, 1, 2, 2, 0] },
  { vertical: 'Electronics / EMS', levels: [1, 2, 0, 1, 0, 1] },
  { vertical: 'Engineering & fabrication', levels: [2, 1, 0, 1, 0, 2] },
  { vertical: 'Packaging', levels: [2, 1, 0, 2, 2, 0] },
];

function Cell({ level }) {
  return (
    <>
      <span className={`u-cell u-cell-${level}`} aria-hidden="true" />
      <span className="u-sr">{LEVELS[level]}</span>
    </>
  );
}

export default function ConstraintMatrix() {
  return (
    <>
      <div className="u-scroll-x">
        <table className="u-matrix">
          <caption className="u-sr">
            Which planning constraints bind in each vertical
          </caption>
          <thead>
            <tr>
              <th scope="col"><span className="u-sr">Vertical</span></th>
              {CONSTRAINTS.map((c) => <th scope="col" key={c}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.vertical}>
                <th scope="row">{row.vertical}</th>
                {row.levels.map((level, i) => (
                  <td key={CONSTRAINTS[i]}><Cell level={level} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="u-matrix-key" aria-hidden="true">
        {[2, 1, 0].map((level) => (
          <span className="u-matrix-key-item" key={level}>
            <span className={`u-cell u-cell-${level}`} />
            {LEVELS[level]}
          </span>
        ))}
      </div>
    </>
  );
}
