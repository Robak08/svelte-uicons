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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.9 4.02a5.008 5.008 0 0 0-9.8 0 5.506 5.506 0 0 0-4.325 8.257l6.244 10.056a3.521 3.521 0 0 0 5.96 0l6.261-10.08A5.507 5.507 0 0 0 16.9 4.02ZM20 9.5a3.331 3.331 0 0 1-.056.573 34.663 34.663 0 0 1-6.624.884C11.329 5.647 19.593 3.842 20 9.5ZM12 2a3 3 0 0 1 2.893 2.249A5.52 5.52 0 0 0 12 6.341a5.52 5.52 0 0 0-2.893-2.092A3 3 0 0 1 12 2ZM7.5 6a3.517 3.517 0 0 1 3.181 4.955 35.968 35.968 0 0 1-6.624-.88A3.5 3.5 0 0 1 7.5 6Zm5.778 15.286a1.54 1.54 0 0 1-2.558 0l-5.55-8.94a37.938 37.938 0 0 0 13.656 0Z"/></svg>
  