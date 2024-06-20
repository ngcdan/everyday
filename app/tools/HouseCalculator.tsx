"use client" // Add this line to mark the file as a client component

import React, { ChangeEvent, FormEvent } from 'react';

interface MonthData {
  month: string;
  rent: number;
  electricity: number;
  water: number;
  total: number;
}

interface State {
  electricityUsage: number;
  electricityFactor: number;
  waterUsage: number;
  waterFactor: number;

  submitted: boolean;
  monthsData: MonthData[];
}

export class HouseCalculator extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    const currentYear = new Date().getFullYear();
    const initialMonthsData: MonthData[] = [...Array(12).keys()].map(i => ({
      month: new Date(currentYear, i).toLocaleString('default', { month: '2-digit', year: 'numeric' }),
      rent: 1500000, // Fixed house rent
      electricity: 0,
      water: 0,
      total: 1500000,
    }));

    this.state = {
      electricityUsage: 0,
      waterUsage: 0,
      electricityFactor: 3300,
      waterFactor: 15000,
      submitted: false,
      monthsData: initialMonthsData,
    };
  }

  handleElectricityChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ electricityUsage: Number(event.target.value) });
  };

  handleWaterChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ waterUsage: Number(event.target.value) });
  };

  handleElectricityFactorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value.replace(/,/g, ''));
    this.setState({ electricityFactor: value });
  };

  handleWaterFactorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value.replace(/,/g, ''));
    this.setState({ waterFactor: value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const currentMonth = new Date().getMonth();
    const updatedMonthsData = this.state.monthsData.map((data, index) => {
      if (index === currentMonth) {
        const rent = 1500000; // Fixed house rent
        const electricity = this.state.electricityUsage * this.state.electricityFactor; // Calculate electricity bill
        const water = this.state.waterUsage * this.state.waterFactor; // Calculate water bill
        const total = rent + electricity + water; // Calculate total cost
        return { ...data, rent, electricity, water, total };
      }
      return data;
    });

    this.setState({ monthsData: updatedMonthsData, submitted: true });
  };

  formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  formatFactor = (value: number) => {
    return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  render() {
    const currentMonth = new Date().getMonth();

    return (
      <div className='container border-t border-gray-200'>
        <h2 className='text-center text-2xl font-bold text-gray-800 my-2'>House Calculator</h2>
        <form onSubmit={this.handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='mb-4 columns-2'>
            <label className='block mb-2 text-gray-600'>Electricity Usage:</label>
            <input
              type='number'
              value={this.state.electricityUsage}
              onChange={this.handleElectricityChange}
              className='w-full p-2 border border-gray-300 rounded mb-2'
            />
            <label className='block mb-2 text-gray-600'>Electricity Factor:</label>
            <input
              type='text'
              value={this.formatFactor(this.state.electricityFactor)}
              onChange={this.handleElectricityFactorChange}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>

          <div className='mb-4 columns-2'>
            <label className='block mb-2 text-gray-600'>Water Usage:</label>
            <input
              type='number'
              value={this.state.waterUsage}
              onChange={this.handleWaterChange}
              className='w-full p-2 border border-gray-300 rounded mb-2'
            />
            <label className='block mb-2 text-gray-600'>Water Factor:</label>
            <input
              type='text'
              value={this.formatFactor(this.state.waterFactor)}
              onChange={this.handleWaterFactorChange}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          <button type='submit' className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Submit</button>

        </form>
        <div className='mt-8 overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='py-3 px-6 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>Month</th>
                <th className='py-3 px-6 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>House Rent</th>
                <th className='py-3 px-6 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>Electricity Bill</th>
                <th className='py-3 px-6 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>Water Bill</th>
                <th className='py-3 px-6 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {this.state.monthsData.map((data, index) => (
                <tr key={index} className={index === currentMonth ? 'bg-yellow-100' : 'hover:bg-gray-100'}>
                  <td className='py-3 px-6 border-b border-gray-200 text-gray-700'>{data.month}</td>
                  <td className='py-3 px-6 border-b border-gray-200 text-gray-700'>{this.formatCurrency(data.rent)}</td>
                  <td className='py-3 px-6 border-b border-gray-200 text-gray-700'>{this.formatCurrency(data.electricity)}</td>
                  <td className='py-3 px-6 border-b border-gray-200 text-gray-700'>{this.formatCurrency(data.water)}</td>
                  <td className='py-3 px-6 border-b border-gray-200 text-gray-700'>{this.formatCurrency(data.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}