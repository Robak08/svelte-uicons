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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.43 15.33 14.319 24h-3.914l8.071-11.47Zm-5.165-7.4L4.046 23.89a5.432 5.432 0 0 0 1.081.11h2.834l9.3-13.214Zm6.382 9.144L16.766 24h2.107a3.989 3.989 0 0 0 3.727-1.981 4.122 4.122 0 0 0-.465-4.241ZM15 3a3 3 0 1 0-4.592 2.534L1.861 17.778a4.122 4.122 0 0 0-.461 4.241 3.38 3.38 0 0 0 .813 1.006L14.046 6.184l-.454-.65A2.989 2.989 0 0 0 15 3Z"/></svg>
  