import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Percent, Calendar } from 'lucide-react';
import { VixValidationService, type VixParameters } from '@/lib/validation';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { findDataByDate, findPreviousDay } from '@/lib/vixData';

interface ValidationMessage {
  type: 'success' | 'error' | 'info';
  message: string;
}

interface TestValues {
  vixOpen: number;
  vixPreviousClose: number;
  currentVixPrice: number;
}

const VixTradingParameters = () => {
  const [parameters, setParameters] = useState<VixParameters>({
    useVixPrice: false,
    useVixGaps: false,
    minVixPrice: 0,
    maxVixPrice: 100,
    minVixOvernightGapUp: 0,
    maxVixOvernightGapUp: 0.25,
    minVixOvernightGapDown: 0,
    maxVixOvernightGapDown: 0.25
  });

  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2025-01-30'));

  const [testValues, setTestValues] = useState<TestValues>({
    vixOpen: 15.93,
    vixPreviousClose: 16.56,
    currentVixPrice: 15.84
  });

  const [testResult, setTestResult] = useState<{
    isValid: boolean;
    reason?: string;
    gapValue?: number;
  } | null>(null);

  const [validationMessages, setValidationMessages] = useState<ValidationMessage[]>([]);
  const validationService = new VixValidationService();

  useEffect(() => {
    updateTestValuesFromDate(selectedDate);
  }, [selectedDate]);

  const updateTestValuesFromDate = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    const dayData = findDataByDate(formattedDate);
    const previousDayData = findPreviousDay(formattedDate);

    if (dayData && previousDayData) {
      setTestValues({
        vixOpen: dayData.open,
        vixPreviousClose: previousDayData.close,
        currentVixPrice: dayData.close
      });
      addValidationMessage({
        type: 'info',
        message: `Loaded data for ${formattedDate}`
      });
    } else {
      addValidationMessage({
        type: 'error',
        message: 'No data available for selected date'
      });
    }
  };

  const addValidationMessage = (message: ValidationMessage) => {
    setValidationMessages(prev => [...prev, message]);
    setTimeout(() => {
      setValidationMessages(prev => prev.filter(msg => msg.message !== message.message));
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let numValue: number;
    
    // Handle empty or decimal-only input
    if (value === '' || value === '.') {
      numValue = 0;
    } else {
      // Remove leading zeros unless it's a decimal less than 1
      const cleanedValue = value.replace(/^0+(?=\d)/, '');
      numValue = parseFloat(cleanedValue);
      if (isNaN(numValue)) numValue = 0;
    }
    
    setParameters(prev => {
      const newParams = { ...prev, [name]: numValue };
      const validationResult = validationService.validateParameterConstraints(newParams);
      
      if (!validationResult.isValid) {
        addValidationMessage({
          type: 'error',
          message: validationResult.reason || 'Invalid parameter values'
        });
        return prev;
      }

      addValidationMessage({
        type: 'success',
        message: `Updated ${name} to ${numValue}`
      });
      return newParams;
    });
  };

  const handleTestInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    setTestValues(prev => ({ ...prev, [name]: numValue }));
  };

  const handleVixPriceToggle = (checked: boolean) => {
    setParameters(prev => ({
      ...prev,
      useVixPrice: checked
    }));
    addValidationMessage({
      type: 'info',
      message: `VIX Price ${checked ? 'enabled' : 'disabled'}`
    });
  };

  const handleVixGapsToggle = (checked: boolean) => {
    setParameters(prev => ({
      ...prev,
      useVixGaps: checked
    }));
    addValidationMessage({
      type: 'info',
      message: `VIX Gaps ${checked ? 'enabled' : 'disabled'}`
    });
  };

  const handleRunTest = () => {
    const gapValue = validationService.calculateVixOvernightGap(
      testValues.vixOpen,
      testValues.vixPreviousClose
    );

    const result = validationService.validateVixConditions(
      parameters,
      testValues.vixOpen,
      testValues.vixPreviousClose,
      testValues.currentVixPrice
    );

    setTestResult({
      ...result,
      gapValue
    });
  };

  return (
    <div className="relative space-y-6">
      {/* Parameters Card */}
      <div className="p-6 space-y-6 bg-gray-900 rounded-lg max-w-2xl">
        <h2 className="text-xl font-bold text-white mb-4">VIX Parameters</h2>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Use VIX Price</span>
          <Switch 
            checked={parameters.useVixPrice}
            onCheckedChange={handleVixPriceToggle}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-white text-sm">Min VIX</label>
            <input
              type="number"
              name="minVixPrice"
              value={parameters.minVixPrice || ''}
              onChange={handleInputChange}
              disabled={!parameters.useVixPrice}
              min="0"
              step="any"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <div className="flex items-center gap-2 mt-4">
              <span className="text-white font-medium">Use VIX Gaps</span>
              <Switch 
                checked={parameters.useVixGaps}
                onCheckedChange={handleVixGapsToggle}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white text-sm">Max VIX</label>
            <input
              type="number"
              name="maxVixPrice"
              value={parameters.maxVixPrice || ''}
              onChange={handleInputChange}
              disabled={!parameters.useVixPrice}
              min="10"
              step="any"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-white text-sm">Min VIX Overnight Gap Up %</label>
            <div className="relative">
              <input
                type="number"
                name="minVixOvernightGapUp"
                value={parameters.minVixOvernightGapUp || ''}
                onChange={handleInputChange}
                disabled={!parameters.useVixGaps}
                min="0"
                step="any"
                className="w-full p-2 pr-8 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Percent className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white text-sm">Max VIX Overnight Gap Up %</label>
            <div className="relative">
              <input
                type="number"
                name="maxVixOvernightGapUp"
                value={parameters.maxVixOvernightGapUp || ''}
                onChange={handleInputChange}
                disabled={!parameters.useVixGaps}
                min="0"
                step="any"
                className="w-full p-2 pr-8 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Percent className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-white text-sm">Min VIX Overnight Gap Down %</label>
            <div className="relative">
              <input
                type="number"
                name="minVixOvernightGapDown"
                value={parameters.minVixOvernightGapDown || ''}
                onChange={handleInputChange}
                disabled={!parameters.useVixGaps}
                min="0"
                step="any"
                className="w-full p-2 pr-8 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Percent className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white text-sm">Max VIX Overnight Gap Down %</label>
            <div className="relative">
              <input
                type="number"
                name="maxVixOvernightGapDown"
                value={parameters.maxVixOvernightGapDown || ''}
                onChange={handleInputChange}
                disabled={!parameters.useVixGaps}
                min="0"
                step="any"
                className="w-full p-2 pr-8 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Percent className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Card */}
      <div className="p-6 space-y-6 bg-gray-900 rounded-lg max-w-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Test Parameters</h2>
        
        {/* Date Picker */}
        <div className="mb-6">
          <label className="text-white text-sm block mb-2">Select Date</label>
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              wrapperClassName="w-full"
              minDate={new Date('2024-10-25')}
              maxDate={new Date('2025-01-31')}
            />
            <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-white text-sm">VIX Open</label>
            <input
              type="number"
              name="vixOpen"
              value={testValues.vixOpen}
              onChange={handleTestInputChange}
              step="0.01"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-white text-sm">VIX Prior Close</label>
            <input
              type="number"
              name="vixPreviousClose"
              value={testValues.vixPreviousClose}
              onChange={handleTestInputChange}
              step="0.01"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-white text-sm">Current VIX Price</label>
            <input
              type="number"
              name="currentVixPrice"
              value={testValues.currentVixPrice}
              onChange={handleTestInputChange}
              step="0.01"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {testResult && (
          <div className="mt-4 space-y-2">
            <div className="text-white">
              <span className="font-medium">VIX Overnight Gap: </span>
              <span className={testResult.gapValue >= 0 ? 'text-green-400' : 'text-red-400'}>
                {(testResult.gapValue * 100).toFixed(2)}%
              </span>
            </div>
            <div className={`p-4 rounded-lg ${testResult.isValid ? 'bg-green-600' : 'bg-red-600'}`}>
              <p className="text-white font-bold">
                {testResult.isValid ? 'TRADE PARAMETERS GOOD FOR TRADE' : 'TRADE NOT TAKEN'}
              </p>
              {!testResult.isValid && (
                <p className="text-white mt-2 text-sm">
                  Reason: {testResult.reason}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={handleRunTest}
          className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Run Test
        </button>
      </div>

      {/* Validation Messages */}
      <div className="absolute bottom-full left-0 right-0 mb-4 space-y-2">
        {validationMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg text-white ${
              msg.type === 'error' ? 'bg-red-500' :
              msg.type === 'success' ? 'bg-green-500' :
              'bg-blue-500'
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VixTradingParameters;