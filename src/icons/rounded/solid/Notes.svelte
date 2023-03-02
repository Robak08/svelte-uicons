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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 15c0-1.654 1.346-3 3-3h4.985a4.89 4.89 0 0 0 .015-.384V5c0-2.757-2.243-5-5-5H9C6.243 0 4 2.243 4 5v10c0 2.757 2.243 5 5 5h7v-5Zm3-1a1 1 0 0 0-1 1v4.483c.31-.176.599-.396.858-.655l3.677-3.677c.346-.346.635-.733.862-1.151H19Zm-4 10H9c-4.962 0-9-4.037-9-9V8a1 1 0 1 1 2 0v7c0 3.859 3.14 7 7 7h6a1 1 0 1 1 0 2Z"/></svg>
  