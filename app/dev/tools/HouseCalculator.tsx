"use client" // Add this line to mark the file as a client component

import React, { ChangeEvent, FormEvent } from 'react';

interface MonthData {
  month: string;
  rent: number;
  electricity: number;
  water: number;
  total: number;
  electricityUsage: number;
  electricityFactor: number;
  waterUsage: number;
  waterFactor: number;
  electricityOdometer: number;
  waterOdometer: number;
}

interface State {
  electricityUsage: number;
  electricityFactor: number;
  electricityOdometer: number;
  waterUsage: number;
  waterFactor: number;
  waterOdometer: number;
  submitted: boolean;
  monthsData: MonthData[];
}

export class HouseCalculator extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    const currentYear = new Date().getFullYear();
    const initialMonthsData: MonthData[] = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(currentYear, i).toLocaleString('default', { month: '2-digit', year: 'numeric' }),
      rent: 0, // Fixed house rent
      electricity: 0,
      electricityOdometer: 6252,
      water: 0,
      waterOdometer: 587,
      total: 0,
      electricityUsage: 0,
      electricityFactor: 3300,
      waterUsage: 0,
      waterFactor: 15000,
    }));

    this.state = {
      electricityUsage: 0,
      electricityOdometer: 0,
      waterOdometer: 0,
      waterUsage: 0,
      electricityFactor: 3300,
      waterFactor: 15000,
      submitted: false,
      monthsData: initialMonthsData,
    };
  }

  componentDidMount() {
    // get data from Local Storage and update state
    const savedData = localStorage.getItem('monthsData');
    if (savedData) {
      this.setState({ monthsData: JSON.parse(savedData) });
    }
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    // Update data to Local Storage when the state has change
    if (prevState.monthsData !== this.state.monthsData) {
      localStorage.setItem('monthsData', JSON.stringify(this.state.monthsData));
    }
  }

  handleElectricityChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ electricityUsage: Number(event.target.value) });
  };

  handleElectricityMeterChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    let previousMonthData = this.getPreviousMonthData();
    if (previousMonthData) {
      let electricityUsage = Number(event.target.value) - previousMonthData.electricityOdometer;
      this.setState({ electricityUsage: electricityUsage, electricityOdometer: value });
    }
  };

  handleWaterChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ waterUsage: Number(event.target.value) });
  };

  handleWaterMeterChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    let previousMonthData = this.getPreviousMonthData();
    if (previousMonthData) {
      let waterUsage = value - previousMonthData.waterOdometer;
      this.setState({ waterOdometer: value, waterUsage: waterUsage });
    }
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
        return {
          ...data,
          rent, electricity, water, total,
          electricityUsage: this.state.electricityUsage,
          electricityFactor: this.state.electricityFactor,
          waterUsage: this.state.waterUsage,
          waterFactor: this.state.waterFactor,
        };
      }
      return data;
    });

    this.setState({ monthsData: updatedMonthsData, submitted: true });
  };

  handleClearData = () => {
    localStorage.removeItem('monthsData');
    const currentYear = new Date().getFullYear();
    const initialMonthsData: MonthData[] = [...Array(12).keys()].map(i => ({
      month: new Date(currentYear, i).toLocaleString('default', { month: '2-digit', year: 'numeric' }),
      rent: 1500000, // Fixed house rent
      electricity: 0,
      electricityOdometer: 6252,
      water: 0,
      waterOdometer: 587,
      total: 1500000,
      electricityUsage: 0,
      electricityFactor: 3300,
      waterUsage: 0,
      waterFactor: 15000,
    }));
    this.setState({ monthsData: initialMonthsData });
  };

  formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  formatFactor = (value: number) => {
    return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  getPreviousMonth() {
    const now = new Date();
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return previousMonth;
  }

  getMonthString(date: Date) {
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    return `${month < 10 ? '0' : ''}${month}/${year}`;
  }

  getPreviousMonthData() {
    const previousMonth = this.getMonthString(this.getPreviousMonth());
    const previousMonthData = this.state.monthsData.find(data => data.month === previousMonth);
    return previousMonthData || {
      month: previousMonth,
      rent: 0, electricity: 0,
      water: 0, total: 0, electricityOdometer: 0, waterOdometer: 0
    };
  }

  render() {
    const currentMonth = new Date().getMonth();

    return (
      <div className='my-0 mx-auto max-w-3xl'>
        <div className="card my-0 mx-auto max-w-3xl">
          <form onSubmit={this.handleSubmit} className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className='block mb-2 text-gray-700 font-medium'>Electricity Meter:</label>
                <input
                  type='number'
                  value={this.state.electricityOdometer}
                  onChange={this.handleElectricityMeterChange}
                  className='w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
              </div>
              <div>
                <label className='block mb-2 text-gray-700 font-medium'>Electricity Usage:</label>
                <input type='number'
                  value={this.state.electricityUsage}
                  onChange={this.handleElectricityChange}
                  className='w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
              </div>
              <div>
                <label className='block mb-2 text-gray-700 font-medium'>Electricity Factor:</label>
                <input type='text'
                  value={this.formatFactor(this.state.electricityFactor)}
                  onChange={this.handleElectricityFactorChange}
                  className='w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className='block mb-2 text-gray-700 font-medium'>Water Meter:</label>
                <input
                  type='number'
                  value={this.state.waterOdometer}
                  onChange={this.handleWaterMeterChange}
                  className='w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
              </div>
              <div>
                <label className='block mb-2 text-gray-700 font-medium'>Water Usage:</label>
                <input
                  type='number'
                  value={this.state.waterUsage}
                  onChange={this.handleWaterChange}
                  className='w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
              </div>
              <div>
                <label className='block mb-2 text-gray-700 font-medium'>Water Factor:</label>
                <input
                  type='text'
                  value={this.formatFactor(this.state.waterFactor)}
                  onChange={this.handleWaterFactorChange}
                  className='w-full p-2 border border-gray-300 rounded' />
              </div>
            </div>

            <div className="mt-4 flex">
              <button
                type='submit'
                className='w-1/2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors mr-2'>
                Calculate
              </button>
              <button
                type='button'
                onClick={this.handleClearData}
                className='w-1/2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors'>
                Clear Data
              </button>
            </div>

          </form>

        </div>

        <div className='mt-4 md:mt-8 overflow-x-auto rounded-lg'>
          <table className='min-w-full table table-auto text-center'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='px-4 py-2 font-medium text-gray-500 uppercase tracking-wider'>Month</th>
                <th className='px-4 py-2 font-medium text-gray-500 uppercase tracking-wider'>House Rent</th>
                <th className='px-4 py-2 font-medium text-gray-500 uppercase tracking-wider'>Electricity Bill</th>
                <th className='px-4 py-2 font-medium text-gray-500 uppercase tracking-wider'>Water Bill</th>
                <th className='px-4 py-2 font-medium text-gray-500 uppercase tracking-wider'>Total Cost</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 text-right'>
              {this.state.monthsData.map((data, index) => (
                <tr key={index}
                  className={`hover:bg-gray-100 transition-colors ease-in-out duration-150 ${index === currentMonth ? 'bg-base-200' : ''}`} >
                  <td className='px-4 py-2 whitespace-nowrap'>{data.month}</td>
                  <td className='px-4 py-2 whitespace-nowrap'>{this.formatCurrency(data.rent)}</td>

                  <td className='px-4 py-2 whitespace-nowrap'>
                    <div className="tooltip tooltip-left">
                      {this.formatCurrency(data.electricity)}
                      <div className="tooltiptext text-left">
                        <ul>
                          <li className="font-medium">Electricity Details:</li>
                          <li> Total Electricity Used: {data.electricityUsage} kWh</li>
                          <li> Factor: {this.formatFactor(data.electricityFactor)} VND/kWh</li>
                          <li> Electricity Bill: {this.formatCurrency(data.electricity)} VND </li>
                        </ul>
                      </div>
                    </div>
                  </td>

                  <td className='px-4 py-2 whitespace-nowrap'>
                    <div className="tooltip tooltip-left">
                      {this.formatCurrency(data.water)}
                      <span className="tooltiptext">
                        <strong>Water Details:</strong><br />
                        Total Water Used: {data.waterUsage} m<sup>3</sup><br />
                        Factor: {this.formatFactor(data.waterFactor)} VND/m<sup>3</sup><br />
                        Water Bill: {this.formatCurrency(data.water)} VND
                      </span>
                    </div>
                  </td>
                  <td className='px-4 py-2 whitespace-nowrap'>{this.formatCurrency(data.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}