export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Dashboard Cards - Placeholder */}
        <div className="card">
          <p className="text-sm text-slate-600 dark:text-slate-400">Net Worth</p>
          <p className="text-3xl font-bold mt-2">₹0.00</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Investment</p>
          <p className="text-3xl font-bold mt-2">₹0.00</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-600 dark:text-slate-400">Current Value</p>
          <p className="text-3xl font-bold mt-2">₹0.00</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-600 dark:text-slate-400">Profit/Loss</p>
          <p className="text-3xl font-bold mt-2 text-success-500">₹0.00</p>
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Charts will be added here</h2>
        <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
          Chart Placeholder
        </div>
      </div>
    </div>
  )
}
