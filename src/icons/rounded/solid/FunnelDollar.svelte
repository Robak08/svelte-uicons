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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 9c0 1.654-1.346 3-3 3v1c-.005 1.308-1.995 1.307-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268c.998.065 1.443-1.55.355-1.761l-3.04-.506C6.813 7.082 7.566 1.98 10.999 2V1c.005-1.308 1.995-1.307 2 0v1h.268a3.01 3.01 0 0 1 2.598 1.499 1 1 0 1 1-1.73 1.002A1.003 1.003 0 0 0 13.268 4H11c-.998-.065-1.443 1.55-.355 1.761l3.04.506A2.763 2.763 0 0 1 16 9Zm3.102-6h-1.276c.202.566.232 1.18.073 1.774a2.982 2.982 0 0 1-.824 1.394c1.906 2.424.67 6.387-2.137 7.441-.617 3.087-5.12 3.167-5.851.11A5.016 5.016 0 0 1 6.403 11.5a2.975 2.975 0 0 1-.302-2.275c.145-.54.429-1.018.824-1.394-1.01-1.307-1.208-3.322-.497-4.832h-1.53c-3.277-.095-5.153 4.11-2.913 6.488L9 17.38V20a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 15 23v-5.62l7.015-7.892c2.24-2.38.365-6.584-2.913-6.488Z"/></svg>
  