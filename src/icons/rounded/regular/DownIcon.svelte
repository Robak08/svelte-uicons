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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.81 12.85A2.96 2.96 0 0 0 19.06 11H17V3.97C17 1.78 15.2 0 12.99 0h-1.98C8.8 0 7 1.78 7 3.97V11H4.94c-1.23 0-2.28.71-2.75 1.85-.47 1.13-.22 2.38.63 3.22l6.37 6.77a3.984 3.984 0 0 0 5.62 0l6.35-6.75c.87-.87 1.12-2.11.65-3.24Zm-2.08 1.85-6.34 6.73c-.77.76-2.01.75-2.76.01l-6.37-6.77a.96.96 0 0 1-.21-1.07c.06-.14.3-.61.9-.61h3.06c.55 0 1-.45 1-1V3.97c0-1.09.9-1.97 2.01-1.97H13c1.11 0 2.01.89 2.01 1.97V12c0 .55.45 1 1 1h3.05c.61 0 .84.47.9.61.06.14.22.64-.24 1.09Z"/></svg>
  