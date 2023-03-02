<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 8v6.5a19.475 19.475 0 0 0-5.265-4.681A9.771 9.771 0 0 1 20 8Zm-.071 10.872A6 6 0 0 1 14 24h-4a6.006 6.006 0 0 1-6-6V8c4.079 0 14.427 4.574 15.929 10.872ZM9 20a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm2-3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm2 3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm5-19a2.982 2.982 0 0 0-1.137.224A4.07 4.07 0 0 0 12 .545a4.07 4.07 0 0 0-4.863.679C4.234.047 1.811 3.515 3.623 6A13.085 13.085 0 0 1 8.5 7.048c.821-.869 2.233-3.63 3.543-2.107.666 1.224-1.145 1.91-1.649 2.912.7.33 1.413.7 2.127 1.114A12.376 12.376 0 0 1 20.384 6 3.12 3.12 0 0 0 18 1Z"/></svg>
  