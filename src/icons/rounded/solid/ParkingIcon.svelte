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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 9.5c0 1.378-1.121 2.5-2.5 2.5H9V9c0-1.103.897-2 2-2h2.5C14.879 7 16 8.122 16 9.5ZM24 5v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-6 4.5C18 7.019 15.981 5 13.5 5H11C8.794 5 7 6.794 7 9v9a1 1 0 1 0 2 0v-4h4.5c2.481 0 4.5-2.019 4.5-4.5Z"/></svg>
  