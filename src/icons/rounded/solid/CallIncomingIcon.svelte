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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 7V3a1 1 0 0 1 2 0v2.613C17.63 4.981 21.7.887 22.293.3a1 1 0 0 1 1.414 1.414C23.115 2.3 19.064 6.373 18.439 7H21a1 1 0 0 1 0 2h-4a2 2 0 0 1-2-2Zm5.655 7.855a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.784 12.784 0 0 1-6.932-6.943l1.6-1.9a3.109 3.109 0 0 0 .006-4.282S7.291.939 7.26.908A3.082 3.082 0 0 0 2.934.862l-1.15 1c-7.719 8.21 12.2 28.138 20.4 20.3l.912-1.05a3.1 3.1 0 0 0 0-4.377c-.033-.027-2.441-1.879-2.441-1.879Z"/></svg>
  