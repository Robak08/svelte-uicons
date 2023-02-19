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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-bracket-curly {customClass}"><path d="M15 24h-1c-2.76 0-5-2.24-5-5v-2.34c0-.79-.32-1.56-.88-2.12l-1.83-1.83a.996.996 0 0 1 0-1.41l1.83-1.83c.56-.56.88-1.33.88-2.12V5.01c0-2.76 2.24-5 5-5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.65 0-3 1.35-3 3v2.34c0 1.34-.52 2.59-1.46 3.54l-1.12 1.12 1.12 1.12c.94.94 1.46 2.2 1.46 3.54v2.34c0 1.65 1.35 3 3 3h1c.55 0 1 .45 1 1s-.45 1-1 1Z"/></svg>
  