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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.283 9.034A3.008 3.008 0 0 0 20.93 8C19.5-2.6 4.492-2.591 3.07 8a3.018 3.018 0 0 0-3.024 3.425l1.059 7.424A6.024 6.024 0 0 0 7.037 24h9.957a6.025 6.025 0 0 0 5.932-5.151l1.059-7.424a3 3 0 0 0-.702-2.391ZM5.089 8C6.356.062 17.647.068 18.911 8Zm15.233 3.707-4.559 4.564a2.493 2.493 0 0 1-3.531 0l-4.559-4.564a1 1 0 0 1 1.413-1.414l4.558 4.564a.5.5 0 0 0 .706 0l4.559-4.564a1 1 0 0 1 1.413 1.414Z"/></svg>
  