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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-crack {customClass}"><path d="M19 24h-2.861a2.002 2.002 0 0 1-1.891-2.652l1.741-5.046a.217.217 0 0 0-.03-.206.218.218 0 0 0-.185-.096h-2.87a1.002 1.002 0 0 1-.957-1.291l1.37-4.497a.159.159 0 0 0-.025-.146.168.168 0 0 0-.269.007l-4.958 7.371a.347.347 0 0 0-.006.363.355.355 0 0 0 .323.192h2.755a1 1 0 0 1 .933 1.359l-1.29 3.358a2.01 2.01 0 0 1-1.867 1.283H5c-2.757 0-5-2.243-5-5V9.724C0 8.06.824 6.51 2.203 5.578L9.204.855a4.98 4.98 0 0 1 5.593 0l7 4.723A4.998 4.998 0 0 1 24 9.724V19c0 2.757-2.243 5-5 5Zm-4.746-10h1.52c.719 0 1.397.35 1.814.935.417.586.526 1.341.292 2.02l-1.741 5.046h2.862c1.654 0 3-1.346 3-3V9.724c0-.998-.494-1.929-1.322-2.487l-7.001-4.723a2.983 2.983 0 0 0-3.356 0l-7 4.722A2.996 2.996 0 0 0 2 9.723v9.276c0 1.654 1.346 3 3 3h3.913l.768-2H8.382a2.367 2.367 0 0 1-1.985-3.66l4.961-7.374a2.15 2.15 0 0 1 1.802-.966c.693 0 1.327.319 1.739.876.413.556.533 1.255.332 1.918l-.976 3.206Z"/></svg>
  