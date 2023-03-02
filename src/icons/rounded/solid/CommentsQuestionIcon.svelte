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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.363 2.636A8.992 8.992 0 0 0 8.349.023C3.823.343 0 4.589 0 9.296v5.038A3.668 3.668 0 0 0 3.661 18h4.477c5.187 0 9.509-3.667 9.839-8.349a9.017 9.017 0 0 0-2.613-7.016ZM9 14.5A1.25 1.25 0 1 1 9 12a1.25 1.25 0 0 1 0 2.5Zm1.447-4.871C10 9.875 10 9.947 10 10a1 1 0 1 1-2 0c0-1.308 1.038-1.879 1.481-2.123.29-.159.595-.535.502-1.066a1.003 1.003 0 0 0-.793-.793.992.992 0 0 0-.832.216.995.995 0 0 0-.358.767 1 1 0 1 1-2 0 2.996 2.996 0 0 1 3.535-2.952 3.023 3.023 0 0 1 2.417 2.417 3.016 3.016 0 0 1-1.506 3.164ZM24 16v5a3 3 0 0 1-3 3h-5c-2.955 0-5.535-1.615-6.92-4.004l.04-.04c5.787-.442 10.47-4.744 10.852-10.164.017-.234.01-.466.012-.699l.013-.013c2.389 1.385 4.004 3.965 4.004 6.92Z"/></svg>
  