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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.654 11.155 5.989 9.37c-1.037-.573-1.773-1.646-1.948-2.9a3.97 3.97 0 0 1 1.133-3.382l1.903-1.903A3.967 3.967 0 0 1 10.461.052a3.964 3.964 0 0 1 2.941 2.019l1.73 2.607-6.478 6.478Zm4.208 4.208 1.785 2.665c.573 1.037 1.646 1.773 2.9 1.948a3.97 3.97 0 0 0 3.382-1.133l1.903-1.903a3.965 3.965 0 0 0 1.133-3.383 3.964 3.964 0 0 0-2.019-2.941l-2.607-1.73-6.478 6.478Zm-2.858.046-1.413-1.415-5.178 5.178a2.5 2.5 0 1 0 1.414 1.414l5.177-5.177Zm7.703-9.117a.999.999 0 0 0-1.414 0l-6.287 6.287 1.413 1.415 6.288-6.288a.999.999 0 0 0 0-1.414Z"/></svg>
  