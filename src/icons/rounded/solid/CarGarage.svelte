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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.891 6.454a1 1 0 0 1-1.346.437L13.752 2.4a4.02 4.02 0 0 0-3.517.007l-8.78 4.48a1 1 0 0 1-.91-1.782L9.339.623a6.043 6.043 0 0 1 5.309-.007l8.807 4.493a1 1 0 0 1 .436 1.345Zm-1.813 6.666-2.058-3.6A5.013 5.013 0 0 0 15.679 7H8.321A5.013 5.013 0 0 0 3.98 9.52l-2.058 3.6A7.109 7.109 0 0 0 1.5 14h21a7.109 7.109 0 0 0-.422-.88ZM19 16v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H1.026Q1 16.3 1 16.594V18a4 4 0 0 0 2 3.463V22a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0v-.537A4 4 0 0 0 23 18v-1.406q0-.3-.026-.594Z"/></svg>
  