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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.7 18H3c-1.493 0-3-1.134-3-3.666v-5.04A9.418 9.418 0 0 1 8.349.023a9 9 0 0 1 9.628 9.628A9.419 9.419 0 0 1 8.7 18ZM20 9.08h-.012c0 .237 0 .474-.012.712-.386 5.408-5.329 9.986-10.892 10.189v.015A8 8 0 0 0 16 24h5a3 3 0 0 0 3-3v-5a8 8 0 0 0-4-6.92Z"/></svg>
  