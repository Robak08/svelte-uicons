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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46c.91.35 1.75.88 2.46 1.59l3.48 3.49c.71.71 1.24 1.55 1.59 2.46h-6.54c-.55 0-1-.45-1-1Zm4 10c0-2.21-1.79-4-4-4a3.999 3.999 0 0 0-2 7.46v2.81c0 .64.78.96 1.23.51l.77-.77.77.77c.45.45 1.23.13 1.23-.51v-2.81c1.2-.69 2-1.98 2-3.46Zm3.98-7H15c-1.65 0-3-1.35-3-3V.02c-.16-.01-.32-.02-.49-.02H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h3v-2.53c-1.23-1.1-2-2.69-2-4.47 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.78-.77 3.37-2 4.47v2.43a5 5 0 0 0 4-4.9v-8.51c0-.16-.01-.32-.02-.49Z"/></svg>
  