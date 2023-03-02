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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46c.91.35 1.75.88 2.46 1.59l3.48 3.49c.71.71 1.24 1.55 1.59 2.46h-6.54c-.55 0-1-.45-1-1Zm1.5 7h-7c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5Zm6.5-3.51V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c.16 0 .32.01.49.02V7c0 1.65 1.35 3 3 3h6.98c.01.16.02.32.02.49ZM6 9c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1Zm12 5.5a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 6 14.5v3A2.5 2.5 0 0 0 8.5 20h7a2.5 2.5 0 0 0 2.5-2.5v-3Z"/></svg>
  