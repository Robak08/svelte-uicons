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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 2h-.171A3.006 3.006 0 0 0 13 0h-2a3.006 3.006 0 0 0-2.829 2H8C5.243 2 3 4.243 3 7v12c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM7 17c-1.308-.006-1.308-1.994 0-2 1.308.006 1.308 1.994 0 2Zm.667-5c-.445 0-.864-.173-1.178-.488l-1.008-.951a1.001 1.001 0 0 1 1.373-1.455l.811.766 1.64-1.59a1 1 0 1 1 1.392 1.436l-1.862 1.805A1.644 1.644 0 0 1 7.668 12ZM17 17h-6c-1.308-.006-1.307-1.994 0-2h6c1.308.006 1.307 1.994 0 2Zm0-5h-4c-1.308-.006-1.307-1.994 0-2h4c1.308.006 1.307 1.994 0 2Z"/></svg>
  