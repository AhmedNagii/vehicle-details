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