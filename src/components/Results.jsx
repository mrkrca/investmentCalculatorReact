import { formattedCurrency } from "../util/investment";

export default function Results({ investment, result }) {
  return (
    <table id="result" >
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Value at End of Year</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody className="center">
        {result.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formattedCurrency.format(Math.round(data.interest))}</td>
            <td>{formattedCurrency.format(Math.round(data.valueEndOfYear))}</td>
            <td>{formattedCurrency.format(Math.round(data.annualInvestment))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}