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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A11.944 11.944 0 0 0 23.9 11.437zM7.472 19.661a1 1 0 0 1-1.412.09A8.993 8.993 0 0 1 12 4a9.1 9.1 0 0 1 2.249.283 1 1 0 1 1-.5 1.938 6.994 6.994 0 0 0-6.367 12.028 1 1 0 0 1 .09 1.412zM12 15a2 2 0 1 1 .512-3.926l3.781-3.781a1 1 0 1 1 1.414 1.414l-3.781 3.781A1.976 1.976 0 0 1 12 15zm5.94 4.751a1 1 0 0 1-1.322-1.5 6.992 6.992 0 0 0 2.161-7 1 1 0 1 1 1.938-.5A9.094 9.094 0 0 1 21 13a9 9 0 0 1-3.06 6.751z"/></svg>
  