import React from 'react';

const ordersData = [
  { id: '#3456_768', date: 'October 17, 2023', status: 'Delivered', price: '$1234.00' },
  { id: '#3456_987', date: 'October 05, 2023', status: 'Delivered', price: '$845.00' },
  { id: '#3456_123', date: 'September 22, 2023', status: 'Delivered', price: '$2,300.00' },
  { id: '#3456_554', date: 'September 10, 2023', status: 'Delivered', price: '$150.00' },
];

export const OrdersTable = () => {
  return (
    <div className="hidden md:block w-full overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Number ID</th>
            <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Dates</th>
            <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
            <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Price</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
              <td className="py-5 text-sm font-bold text-[#111111]">{order.id}</td>
              <td className="py-5 text-sm text-gray-500 font-medium">{order.date}</td>
              <td className="py-5 text-sm text-[#111111] font-bold">{order.status}</td>
              <td className="py-5 text-sm text-[#111111] font-bold">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
