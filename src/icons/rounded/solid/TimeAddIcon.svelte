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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 20a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z"/><path d="M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z"/></svg>
  