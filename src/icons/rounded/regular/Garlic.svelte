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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 5.466V3.5c-.041-2.494-2.18-3.765-4.5-3.5A3.506 3.506 0 0 0 8 3.5v1.966C6.251 6.681.333 11.278.006 17.934A4.726 4.726 0 0 0 4.428 23a4.972 4.972 0 0 0 3.33-1.417 5 5 0 0 0 8.508.029 4.544 4.544 0 0 0 7.728-3.678C23.667 11.278 17.749 6.681 16 5.466ZM10 3.5A1.5 1.5 0 0 1 11.5 2h1A1.5 1.5 0 0 1 14 3.5v2.14a6 6 0 0 0-.851 1.74 1.928 1.928 0 0 0-2.308.007A5.705 5.705 0 0 0 10 5.63Zm-3 15A2.521 2.521 0 0 1 4.458 21a2.687 2.687 0 0 1-2.453-2.968c.259-5.261 4.84-9.209 6.721-10.617a7.805 7.805 0 0 1 .557 2.369A20.812 20.812 0 0 0 7 18.5Zm6.927 2.8a2.975 2.975 0 0 1-2.491.646c-4.871-1.214-1.357-9.859.564-12.951 1.8 2.889 4.609 9.882 1.924 12.305Zm7.274-1.06c-1.314 1.6-4.294.428-4.195-1.743a20.9 20.9 0 0 0-2.288-8.72 6.951 6.951 0 0 1 .557-2.366c1.878 1.41 6.461 5.359 6.725 10.62a3.062 3.062 0 0 1-.8 2.212Z"/></svg>
  