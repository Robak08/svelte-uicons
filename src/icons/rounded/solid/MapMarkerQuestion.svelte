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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.778 3.222C17.7 1.145 14.938 0 12 0S6.299 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11s1.144 5.7 3.25 7.805l3.943 3.643C9.216 23.449 10.568 24 12 24s2.784-.551 3.787-1.533l3.992-3.689c2.078-2.078 3.222-4.84 3.222-7.778s-1.145-5.701-3.222-7.778ZM12 19a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 19Zm1.929-7.495c-.521.287-.929.944-.929 1.495v1a1 1 0 0 1-2 0v-1c0-1.274.807-2.609 1.963-3.247a1.996 1.996 0 0 0 1.004-2.125c-.138-.787-.81-1.458-1.597-1.596a1.99 1.99 0 0 0-1.655.435C10.26 6.848 10 7.407 10 8a1 1 0 0 1-2 0c0-1.185.521-2.302 1.429-3.064a4.03 4.03 0 0 1 3.287-.873c1.613.283 2.938 1.607 3.221 3.22a4.023 4.023 0 0 1-2.008 4.222Z"/></svg>
  