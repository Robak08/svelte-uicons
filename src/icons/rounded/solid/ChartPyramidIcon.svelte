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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.587 18.24A4 4 0 0 0 4.179 24H19.82a4 4 0 0 0 3.593-5.76L22.806 17H1.194Z"/><path d="M19.377 10 4.623 10 2.174 15 21.826 15 19.377 10z"/><path d="M15.593 2.275a4 4 0 0 0-7.185 0L5.6 8h12.8Z"/></svg>
  