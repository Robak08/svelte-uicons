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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.283 9.034A3.008 3.008 0 0 0 20.93 8C19.5-2.6 4.492-2.591 3.07 8a3.018 3.018 0 0 0-3.024 3.425l1.059 7.424A6.024 6.024 0 0 0 7.037 24h9.957a6.025 6.025 0 0 0 5.932-5.151l1.059-7.424a3 3 0 0 0-.702-2.391ZM12 2a7 7 0 0 1 6.911 6H5.089A7 7 0 0 1 12 2Zm6.2 8-3.85 3.857a.5.5 0 0 1-.706 0L9.792 10Zm2.746 8.565A4.018 4.018 0 0 1 16.994 22H7.037a4.018 4.018 0 0 1-3.955-3.435l-1.059-7.423A1 1 0 0 1 3.012 10h3.955l5.265 5.271a2.493 2.493 0 0 0 3.531 0L21.026 10a1 1 0 0 1 .982 1.14Z"/></svg>
  