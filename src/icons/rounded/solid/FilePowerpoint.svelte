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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 16c0 .55-.45 1-1 1h-1v-2h1c.55 0 1 .45 1 1Zm2-8h6.54c-.35-.91-.88-1.75-1.59-2.46l-3.48-3.49A7.037 7.037 0 0 0 14.01.46V7c0 .55.45 1 1 1Zm7 2.49V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c.16 0 .32.01.49.02V7c0 1.65 1.35 3 3 3h6.98c.01.16.02.32.02.49Zm-7.06 4.92c-.28-1.42-1.6-2.4-3.06-2.4h-.66c-1.34 0-2.23.9-2.23 2v5c0 .55.45 1 1 1s1-.45 1-1v-1h1c1.85 0 3.31-1.68 2.94-3.6Z"/></svg>
  