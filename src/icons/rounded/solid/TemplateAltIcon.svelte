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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46c.91.35 1.75.88 2.46 1.59l3.48 3.49c.71.71 1.24 1.55 1.59 2.46h-6.54c-.55 0-1-.45-1-1Zm8 3.49V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c.16 0 .32.01.49.02V7c0 1.65 1.35 3 3 3h6.98c.01.16.02.32.02.49ZM10 20c0-.55-.45-1-1-1H8v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1Zm0-7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1Zm0-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1Zm8 9c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-2Zm0-5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-2Z"/></svg>
  