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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18v2c0 1.65-1.35 3-3 3h-2c-1.65 0-3-1.35-3-3v-2c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3ZM21 1h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3ZM8.12.88C6.95-.29 5.05-.29 3.9.86L.31 4.28a.996.996 0 0 0-.04 1.41c.38.4 1.01.42 1.41.03l3.31-3.15V23c0 .55.45 1 1 1s1-.45 1-1V2.57l3.31 3.15c.19.18.44.28.69.28.26 0 .53-.1.72-.31.38-.4.37-1.03-.04-1.41L8.12.88Z"/></svg>
  