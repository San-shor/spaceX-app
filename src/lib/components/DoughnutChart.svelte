<script>
  import {
    Chart,
    Card,
    A,
    Button,
    Dropdown,
    DropdownItem,
    Popover,
    Tooltip,
  } from 'flowbite-svelte';

  import { calculateSuccessRate } from '../../utils/successRateUtils';

  const { chartData, filterValue = $bindable() } = $props();
  const filteredData = $derived(() =>
    chartData.filter((item) => item.status.includes(filterValue))
  );
  const successRate = $derived(calculateSuccessRate(filteredData()));
  const options = $derived({
    series: successRate,
    colors: [
      '#1C64F2',
      '#16BDCA',
      '#FDBA8C',
      '#E74694',
      '#34D399',
      '#FACC15',
      '#A78BFA',
    ],

    chart: {
      height: 220,
      width: '100%',
      type: 'donut',
    },
    stroke: {
      colors: ['transparent'],
      lineCap: '',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Landing Pads',
              fontFamily: 'Inter, sans-serif',
              formatter: function (w) {
                const count = w.globals.seriesTotals.slice(0, 7).length;
                return `${count}`;
              },
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: function (value) {
                return value + 'k';
              },
            },
          },
          size: '80%',
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  });
</script>

<Card class="w-[522px] h-[350px]">
  <div class="flex justify-between items-start w-full">
    <div class="flex-col items-center">
      <div class="flex items-center mb-1">
        <p class="text-base font-semibold text-gray-900">Success rate Chart</p>
      </div>
    </div>
  </div>

  <Chart {options} class="py-6" />
</Card>
