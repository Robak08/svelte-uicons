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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.9 16.093A2.99 2.99 0 0 0 13.036 14h-2.072A2.99 2.99 0 0 0 8.1 16.093l-.672 2.119C7.205 19.31 6.256 21.814 8 22v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1c1.744-.188.8-2.688.568-3.789ZM10.964 16h2.072a1 1 0 0 1 .953.7L14.4 18H9.6l.414-1.3a1 1 0 0 1 .95-.7ZM24 9.762v9.365a5.009 5.009 0 0 1-3.748 4.841A1 1 0 0 1 19 22.994V13a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v9.994a1 1 0 0 1-1.252.974A5.009 5.009 0 0 1 0 19.127V9.762a5 5 0 0 1 2.2-4.144l7-4.724a5 5 0 0 1 5.594 0l7 4.724A5 5 0 0 1 24 9.762Z"/></svg>
  