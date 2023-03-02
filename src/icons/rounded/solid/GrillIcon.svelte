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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.921 9.69a11.968 11.968 0 0 1-5.755 7.649l1.781 5.345a1 1 0 1 1-1.9.632L16.345 18.2a12.322 12.322 0 0 1-3.345.757V23a1 1 0 0 1-2 0v-4.043a12.329 12.329 0 0 1-3.346-.757l-1.7 5.117a1 1 0 1 1-1.9-.632l1.781-5.343C2.366 15.8-3.653 7.037 3 6h18a3.026 3.026 0 0 1 2.921 3.69ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm4 0a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1ZM8 4a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1Z"/></svg>
  