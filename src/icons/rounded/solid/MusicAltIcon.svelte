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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.554.923A3.978 3.978 0 0 0 19.263.07l-9.184 1.722A5 5 0 0 0 6 6.706v9.85A3.959 3.959 0 0 0 4 16a4 4 0 1 0 4 4v-9.124A2 2 0 0 1 9.632 8.91l11.183-2.1A1 1 0 0 1 22 7.8v5.76a3.959 3.959 0 0 0-2-.56 4 4 0 1 0 4 4V4A3.987 3.987 0 0 0 22.554.923z"/></svg>
  