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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 24a12.021 12.021 0 0 1-8.914-3.966 11.9 11.9 0 0 1-3.02-9.309A12.122 12.122 0 0 1 13.085.152a13.061 13.061 0 0 1 5.031.205 2.5 2.5 0 0 1 1.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 0 1-.7 4.32A13.894 13.894 0 0 1 15 24Z"/></svg>
  