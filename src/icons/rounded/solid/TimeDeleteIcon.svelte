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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.707 22.707a1 1 0 0 1-1.414 0l-1.414-1.414-1.415 1.414a1 1 0 0 1-1.439-1.389l.025-.025 1.414-1.414-1.414-1.415a1 1 0 0 1 1.389-1.439l.025.025 1.415 1.414 1.414-1.414a1 1 0 0 1 1.439 1.389l-.025.025-1.414 1.415 1.414 1.414a.996.996 0 0 1 .008 1.411c-.002.002-.003.004-.008.003z"/><path d="M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z"/></svg>
  