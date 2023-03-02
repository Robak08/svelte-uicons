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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.34 10.793a6.179 6.179 0 0 1 .545-8.275l.633-.634a6.179 6.179 0 0 1 8.274-.544 5.946 5.946 0 0 1 2.146 4.343 6.01 6.01 0 0 1-1.751 4.5l-1 1a6.018 6.018 0 0 1-4.246 1.758q-.129 0-.258-.006a5.95 5.95 0 0 1-4.343-2.142ZM18.757 16a5.214 5.214 0 0 0-3.707 1.535A15.14 15.14 0 0 1 4.272 22h-1.15a1.121 1.121 0 0 1-.794-1.914l.7-.7a7.176 7.176 0 0 0 4.6-2.092l3.054-3.054a8 8 0 0 1-2.873-2.16 7.568 7.568 0 0 1-1.082-1.725L3.7 13.379a7.171 7.171 0 0 0-2.092 4.6l-.7.7A3.121 3.121 0 0 0 3.122 24h1.15a17.13 17.13 0 0 0 12.192-5.05A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.757 16Z"/></svg>
  