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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 4H8a2 2 0 0 1 2-2h1V1a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2ZM8 6v6h8V6H8Zm10 6h5.678l.243-1.216c.236-1.18-.066-2.39-.829-3.32S21.202 6 19.999 6H18v6ZM.322 12H6V6H4.001c-1.203 0-2.33.533-3.093 1.464s-1.065 2.14-.829 3.32L.322 12Zm22.955 2-.077.383A4.51 4.51 0 0 1 18.788 18h-2.789v3c0 1.654-1.346 3-3 3h-2c-1.654 0-3-1.346-3-3v-3H5.21a4.51 4.51 0 0 1-4.412-3.617L.721 14h22.557Z"/></svg>
  