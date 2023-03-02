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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-7 19a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 19Zm1.928-6.512C13.407 12.775 13 13.44 13 14a1 1 0 1 1-2 0c0-1.284.807-2.626 1.963-3.264a1.995 1.995 0 0 0 1.004-2.125 2.024 2.024 0 0 0-1.596-1.596 1.992 1.992 0 0 0-1.656.435c-.455.381-.715.94-.715 1.533a1 1 0 0 1-2 0c0-1.185.521-2.302 1.429-3.064a4.032 4.032 0 0 1 3.287-.873c1.613.282 2.938 1.606 3.221 3.22a4.021 4.021 0 0 1-2.009 4.222Z"/></svg>
  