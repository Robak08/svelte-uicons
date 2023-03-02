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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1ZM5.5 3.15c-.52-.57-.65-1.34-.34-2.03S6.12 0 6.88 0h10.25c.75 0 1.41.43 1.72 1.12s.18 1.46-.33 2.02l-4.81 5.11c-.42.47-1.04.75-1.69.75s-1.27-.28-1.71-.76L5.5 3.15ZM7.16 2l4.6 4.88c.19.21.3.19.46.02L16.83 2H7.17Zm11.33 18.85c.52.57.65 1.34.34 2.03S17.87 24 17.11 24H6.88c-.75 0-1.41-.43-1.72-1.12s-.18-1.46.33-2.02l4.81-5.11c.84-.93 2.53-.95 3.4.02l4.79 5.08Z"/></svg>
  