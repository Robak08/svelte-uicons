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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM6 17a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v10Zm4 0a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v10Zm4-.5a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 1 1 3 0v9Zm6 .5a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v10Zm-4.5 1a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Z"/></svg>
  