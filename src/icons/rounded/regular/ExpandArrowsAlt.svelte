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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.7 4.724 1.595 1.594A1 1 0 0 0 24 5.613v-4.6a1 1 0 0 0-1-1h-4.607a1 1 0 0 0-.707 1.705l1.6 1.595L12 10.587 4.709 3.3l1.605-1.6a1 1 0 0 0-.707-1.708L1-.01a1 1 0 0 0-1 1v4.6a1 1 0 0 0 1.709.71L3.3 4.714 10.587 12l-7.282 7.276-1.6-1.595A1 1 0 0 0 0 18.387v4.6a1 1 0 0 0 1 1h4.607a1 1 0 0 0 .707-1.7l-1.595-1.598L12 13.413l7.282 7.275-1.6 1.6a1 1 0 0 0 .707 1.7h4.605a1 1 0 0 0 1-1v-4.6a1 1 0 0 0-1.707-.707L20.7 19.275 13.414 12Z"/></svg>
  