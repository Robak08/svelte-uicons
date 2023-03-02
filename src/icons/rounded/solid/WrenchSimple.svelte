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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 1.076V7.83c0 1.624-1.216 3.081-2.839 3.166A3 3 0 0 1 9 8V1.076C9 .272 8.156-.228 7.433.123 3.645 1.962 1 5.81 1 10.073c0 4.146 2.295 7.898 5.988 9.792.614.315 1.012.997 1.012 1.736v1.398a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.398c0-.739.397-1.421 1.012-1.736A10.963 10.963 0 0 0 23 10.073c0-4.263-2.645-8.111-6.433-9.95-.723-.351-1.567.15-1.567.953Z"/></svg>
  