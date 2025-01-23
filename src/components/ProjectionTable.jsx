export const ProjectionTable = ({ projections }) => {
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-200 calc-content">
        <table className="w-full">
          <thead className="bg-[#282830]">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-white">Año</th>
              <th className="px-4 py-2 text-right text-sm font-semibold text-white">PBTC</th>
              <th className="px-4 py-2 text-right text-sm font-semibold text-white">Inversión</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 cacl-content">
            {projections.map((row) => (
              <tr key={row.year} className="animate-fade-in text-white">
                <td className="px-4 py-2 text-sm">{row.year}</td>
                <td className="px-4 py-2 text-right text-sm">
                  ${row.pbtc.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="px-4 py-2 text-right text-sm">
                  ${row.investment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };