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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.356 7.36a1.085 1.085 0 0 1-.721-.732 8 8 0 0 0-15.49.841 7.652 7.652 0 0 0 .8 5.18A5.446 5.446 0 0 0 .057 18.3 5.844 5.844 0 0 0 5.683 23h9.1c5.073 0 8.852-3.028 9.19-7.362a7.962 7.962 0 0 0-5.617-8.278zm.872 7.347-5.415 5.414a3 3 0 0 1-4.242 0L6.184 16.7A1 1 0 1 1 7.6 15.3l3.384 3.414a1.025 1.025 0 0 0 1.411 0l5.414-5.414a1 1 0 0 1 1.415 1.414z"/></svg>
  