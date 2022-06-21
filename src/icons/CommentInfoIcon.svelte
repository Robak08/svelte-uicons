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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-comment-info {customClass}"><path d="M13.5 6.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0ZM24 19v-6.66A12.209 12.209 0 0 0 12.836.028 12 12 0 0 0 .029 12.854C.471 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5ZM12.7 2.024A10.2 10.2 0 0 1 22 12.34V19a3 3 0 0 1-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0 1 12.016 2c.227 0 .456.009.684.024ZM14 18v-6a2 2 0 0 0-2-2h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0Z"/></svg>
  