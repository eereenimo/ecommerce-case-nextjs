import React from 'react';

const ordersData = [
  { id: '#3456_768', date: 'October 17, 2023', status: 'Delivered', price: '$1234.00' },
  { id: '#3456_987', date: 'October 05, 2023', status: 'Delivered', price: '$845.00' },
  { id: '#3456_123', date: 'September 22, 2023', status: 'Delivered', price: '$2,300.00' },
  { id: '#3456_554', date: 'September 10, 2023', status: 'Delivered', price: '$150.00' },
];

export const MobileOrderCard = () => {
  return (
    <div className="flex md:hidden flex-col gap-4 w-full">
      {ordersData.map((order) => (
        <div key={order.id} className="flex flex-col gap-3 py-5 border-b border-gray-100 last:border-0">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Number ID</span>
            <span className="text-sm font-bold text-[#111111]">{order.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dates</span>
            <span className="text-sm text-gray-500 font-medium">{order.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</span>
            <span className="text-sm text-[#111111] font-bold">{order.status}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</span>
            <span className="text-sm text-[#111111] font-bold">{order.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
