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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.785 24c-3.61 0-6.299-1.857-6.299-6.299v-7.115h-3.28V6.733C8.815 5.796 10.325 2.69 10.499 0h3.748v6.108h4.373v4.477h-4.373v6.195c0 1.857.937 2.499 2.429 2.499h2.117V24h-4.008z"/></svg>
  