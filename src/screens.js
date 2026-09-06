/* The product screens used across the site. Files live in public/app/.
   Captions describe what is on the screen in the plant's words; the data on
   them is the demo workspace, which the note under each section says. */

export const SCREENS = {
  summary: {
    src: '/app/executive-summary.png',
    ratio: '2000 / 765',
    title: 'Executive summary',
    alt: 'The executive summary screen: on-time-in-full rate, estimated total spend, volume fill rate and total shortages across the top; a cumulative supply against demand chart; and a constraint analysis showing which constraints bound the plan and how often. The last run, its horizon and each saved version are listed on the left.',
    caption: 'One page for the plant head. On-time rate, spend, fill rate and shortages for this run, which constraint is holding the plan back and how often, and every version of the plan kept so you can compare last week with this one.',
  },
  gantt: {
    src: '/app/machine-gantt.png',
    ratio: '2000 / 1130',
    title: 'Machine Gantt',
    alt: 'The machine Gantt screen: each machine as a row, each work order as a block across the days of the month, with the first day marked frozen and the rest as the planning window. Below the chart, the work orders on the selected machine are listed with item, routing, quantity, start, finish, duration and a lock to override by hand.',
    caption: 'Which work order runs on which machine, and when. The first day is frozen, the rest is the plan. Click a block to see every order on that machine, or lock one to keep it exactly where you put it.',
  },
  calendar: {
    src: '/app/capacity-calendar.png',
    ratio: '2000 / 1091',
    title: 'Capacity calendar',
    alt: 'The capacity calendar screen: a grid of machines against days, each cell shaded by how loaded that machine is on that day, from empty to full, with a legend for utilisation bands.',
    caption: 'Every machine, every day, how loaded. Set a day to zero for a holiday or add hours for an extra shift, and re-run.',
  },
  trace: {
    src: '/app/trace.png',
    ratio: '2000 / 1098',
    title: 'Trace',
    alt: 'The trace screen: a list of demand orders filtered by fulfilled, late, partial or failed on the left; on the right, one order traced step by step, from the check of its quantity and due date, to the stock it used, to the work-in-progress it consumed, to the operations still to be scheduled.',
    caption: 'Any order, traced step by step: the stock it used, the work in progress it consumed, the operations still to schedule. When something comes back short, this is where you read why, in the plan’s own words.',
  },
  lineage: {
    src: '/app/data-lineage.png',
    ratio: '2000 / 1090',
    title: 'Data lineage',
    alt: 'The data lineage screen: raw ERP exports such as item master, bill of materials, routing, demand, supplies and purchase orders on the left, mapped by lines to the plan’s input sheets on the right, with a table below listing each mapping and the transformation applied.',
    caption: 'How your ERP’s exports become the plan’s inputs, every mapping visible. When a column in your ERP changes, the map changes, not your plan.',
  },
  production: {
    src: '/app/production-plan.png',
    ratio: '2000 / 1104',
    title: 'Production plan',
    alt: 'The production plan screen: a table of work, one row per operation, with start date, hours, machine, item, process name such as turning, milling or centreless grinding, quantity, and a note such as remaining operations after a work-in-progress receipt or a flexible routing that can run in-house or be subcontracted. Toggles for machines only and consolidate, and an export to Excel.',
    caption: 'The plan as a list, one row per operation. Turning 1, turning 2, centreless grinding, each with its machine, hours and start date. Where an operation can go in-house or to a subcontractor, the plan says so.',
  },
  inventory: {
    src: '/app/mrp-inventory-plan.png',
    ratio: '2000 / 1097',
    title: 'MRP inventory plan',
    alt: 'The MRP inventory plan screen: for one raw material, a day-by-day table of starting stock, inflow, outflow, ending stock and shortage across the horizon, with items pinned for comparison. Below it, the global purchase plan: purchase order date, arrival date, supplier, item, order quantity, rate and total cost, with the same item split across two suppliers.',
    caption: 'One raw material, day by day: what comes in, what the plan uses, what is left. Under it, the purchase plan for everything, with the same blank split between two suppliers by the share of business agreed.',
  },
  fulfilment: {
    src: '/app/demand-fulfilment.png',
    ratio: '2000 / 1105',
    title: 'Demand fulfilment',
    alt: 'The demand fulfilment screen: volume fill rate, total orders, on time and full, and late or short across the top; below, a part-wise table of demand quantity, fulfilled quantity, shortage quantity, fill rate as a bar, and the count of orders fulfilled, partial and short.',
    caption: 'Every customer order, and whether the plan meets it. Part by part: how much was asked, how much the plan delivers, and how much is short, before the month starts rather than at the end of it.',
  },
  subcontract: {
    src: '/app/subcontract-plan.png',
    ratio: '2000 / 1104',
    title: 'Subcontract plan',
    alt: 'The subcontracting plan screen: order ID, item, vendor such as a coater, anodiser or machining shop, send quantity, send date, receive date, lead time in days, rate and total cost, with duplicate lines merged.',
    caption: 'What goes out to the coater, the anodiser or the machining shop, when it leaves, when it is back, and what it costs. Planned with the machines, not after them.',
  },
};
