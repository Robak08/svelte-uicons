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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19a1 1 0 0 0-1 1 2 2 0 0 1-1.758 1.975l2.736-12.766a1 1 0 1 0-1.956-.418L20.549 11H19.13a1.006 1.006 0 0 1-.856-.484l-1.261-2.094A5.026 5.026 0 0 0 12.729 6H6.5a3.01 3.01 0 0 0-2.417 1.22l-.875 1.186a1 1 0 1 0 1.609 1.188l.876-1.187A1 1 0 0 1 6.5 8h2.962L7.7 12.274a3 3 0 0 0 1.175 3.675l3.658 2.308A1 1 0 0 1 13 19.1V22H7.126l1.108-3.436a1 1 0 1 0-1.9-.614L5.024 22h-2.8l1.817-8.8a1 1 0 0 0-1.959-.4l-2.061 10A1 1 0 0 0 1 24h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1Zm-9.4-2.434-3.657-2.308a1 1 0 0 1-.392-1.224L11.625 8h1.1a2.97 2.97 0 0 1 .718.094l-1.864 4.525a1 1 0 1 0 1.849.762l1.7-4.134c.052.071.118.13.164.206l1.261 2.094A3.018 3.018 0 0 0 19.13 13h.99l-1.929 9H15v-2.9a2.984 2.984 0 0 0-1.4-2.534ZM12 2.5A2.5 2.5 0 1 1 14.5 5 2.5 2.5 0 0 1 12 2.5Z"/></svg>
  