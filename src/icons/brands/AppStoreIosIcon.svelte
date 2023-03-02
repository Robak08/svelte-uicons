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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.149.001H4.847A4.846 4.846 0 0 0 0 4.849v14.305a4.845 4.845 0 0 0 4.847 4.845h14.305a4.847 4.847 0 0 0 4.847-4.847V4.849a4.849 4.849 0 0 0-4.85-4.848zm-12.514 19a1.093 1.093 0 1 1-1.896-1.092l.78-1.35c.882-.273 1.598-.063 2.166.621l-1.05 1.821zm7.583-2.945H4.29a1.088 1.088 0 0 1-1.092-1.092c0-.606.486-1.092 1.092-1.092h2.783l3.564-6.176-1.113-1.932a1.095 1.095 0 0 1 1.896-1.092l.477.843.486-.84a1.093 1.093 0 1 1 1.896 1.091l-4.682 8.105h3.387c1.096.001 1.711 1.291 1.234 2.185zm5.349.006h-1.578l1.065 1.847a1.095 1.095 0 0 1-1.896 1.092c-1.793-3.111-3.141-5.438-4.034-6.989-.915-1.578-.261-3.162.384-3.699.717 1.23 1.788 3.087 3.218 5.565h2.841c.606 0 1.092.486 1.092 1.092a1.089 1.089 0 0 1-1.092 1.092z"/></svg>
  