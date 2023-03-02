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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 18h24a6.006 6.006 0 0 1-6 6H6a6.006 6.006 0 0 1-6-6Zm18-8H6a6.006 6.006 0 0 0-6 6h24a6.006 6.006 0 0 0-6-6ZM6 8h12a7.939 7.939 0 0 1 1.567.155l-.029-.125A3.994 3.994 0 0 0 15.657 5H7.138l.142-.65A2.983 2.983 0 0 1 10.209 2H17a1 1 0 0 0 0-2h-6.791a4.975 4.975 0 0 0-4.883 3.919L4.4 8.16A8.02 8.02 0 0 1 6 8Z"/></svg>
  