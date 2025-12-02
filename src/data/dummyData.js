import {
  ExpensesIcon,
  IncomeIcon,
  Contract,
  MapPin,
  SaudiRiyal,
} from '../assets';

export const headerMetaData = [
  {
    title: 'Chassis Number',
    info: 'JTMBFREV4JJ752103',
    component: null,
  },
  {
    title: 'Plate Number',
    info: {
      numberEN: '5100',
      numberAR: '٥١٠٠',
      codeAR: 'ح ر س',
      codeEN: 'S R J',
    },
    component: 'PlateNumber',
  },
  {
    title: 'Driver Assigned',
    info: { name: 'Abdallah Bin Nasser', phoneNumber: '+966 56 896 6230' },
    component: 'DriverInfo',
  },
  {
    title: 'Authorized To',
    info: null,
    component: null,
  },
  {
    title: 'Tracking Device',
    info: null,
    component: null,
  },
];

export const vehicleDetailTabs = [
  {
    id: 'overview',
    label: 'Overview',
    isActive: true,
    path: '/vehicle/123/overview',
  },
  {
    id: 'live',
    label: 'Live',
    isActive: false,
    path: '/vehicle/123/live',
  },
  {
    id: 'schedule',
    label: 'Schedule',
    isActive: false,
    path: '/vehicle/123/schedule',
  },
  {
    id: 'rides',
    label: 'Rides',
    isActive: false,
    path: '/vehicle/123/rides',
  },
  {
    id: 'contracts',
    label: 'Contracts',
    isActive: false,
    path: '/vehicle/123/contracts',
  },
  {
    id: 'transactions',
    label: 'Transactions',
    isActive: false,
    path: '/vehicle/123/transactions',
  },
  {
    id: 'fuel-history',
    label: 'Fuel History',
    isActive: false,
    path: '/vehicle/123/fuel-history',
  },
  {
    id: 'updates-logs',
    label: 'Updates Logs',
    isActive: false,
    path: '/vehicle/123/updates-logs',
  },
];

export const vehicleDetailsData = [
  {
    label: 'Chassis Number',
    value: 'JTMBFREV4JJ752103',
  },
  {
    label: 'Plate Number',
    value: '5100 SRJ',
  },
  {
    label: 'Brand',
    value: 'Chevrolet',
  },
  {
    label: 'Model',
    value: 'Tahoe',
  },
  {
    label: 'Year',
    value: '2025',
  },
  {
    label: 'Color',
    value: 'Black',
  },
];

export const summaryCardData = [
  {
    id: 'income',
    label: 'Total Income',
    value: '202,230',
    currencySymbol: SaudiRiyal,
    iconPath: IncomeIcon,
  },
  {
    id: 'expenses',
    label: 'Total Expenses',
    value: '202,230',
    currencySymbol: SaudiRiyal,
    iconPath: ExpensesIcon,
  },
  {
    id: 'contracts',
    label: 'Total Contracts',
    value: '2,230',
    currencySymbol: null, // No currency needed here
    iconPath: Contract,
  },
  {
    id: 'rides',
    label: 'Total Rides',
    value: '2,230',
    currencySymbol: null,
    iconPath: MapPin,
  },
];

export const chartData = [
  { month: 'Jan', revenue: 95, expenses: 78 },
  { month: 'Feb', revenue: 110, expenses: 85 },
  { month: 'Mar', revenue: 125, expenses: 105 },
  { month: 'Apr', revenue: 155, expenses: 140 }, // The peak month shown in the image
  { month: 'May', revenue: 88, expenses: 65 },
  { month: 'Jun', revenue: 115, expenses: 88 },
  { month: 'Jul', revenue: 40, expenses: 30, fill: 'hsla(0, 0%, 91%, 1)' },
  { month: 'Aug', revenue: 60, expenses: 45, fill: 'hsla(0, 0%, 91%, 1)' },
  { month: 'Sep', revenue: 75, expenses: 55, fill: 'hsla(0, 0%, 91%, 1)' },
];
