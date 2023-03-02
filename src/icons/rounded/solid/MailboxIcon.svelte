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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 3H9.883A7.009 7.009 0 0 1 12 8v10c0 1.13-.391 2.162-1.026 3H21c1.654 0 3-1.346 3-3V9c0-3.309-2.691-6-6-6Zm3 9c-.006 1.308-1.995 1.307-2 0v-1h-3c-1.308-.006-1.307-1.995 0-2h4a1 1 0 0 1 1 1v2ZM4.501 3.024C1.903 3.278 0 5.612 0 8.222V18a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V8a5.006 5.006 0 0 0-5.499-4.976ZM6 11H4c-1.308-.006-1.307-1.994 0-2h2c1.308.006 1.307 1.994 0 2Z"/></svg>
  