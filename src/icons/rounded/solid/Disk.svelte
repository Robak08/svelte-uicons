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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><circle cx="256" cy="298.667" r="42.667"/><path d="m480.768 87.936-56.704-56.704a106.423 106.423 0 0 0-18.731-14.699V64c-.071 58.881-47.786 106.596-106.667 106.667h-85.333C154.452 170.596 106.737 122.881 106.667 64V0C47.786.071.071 47.786 0 106.667v298.667C.071 464.215 47.786 511.93 106.667 512h298.667c58.88-.07 106.596-47.785 106.666-106.666V163.35a105.943 105.943 0 0 0-31.232-75.414zM256 384c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333 85.333 38.205 85.333 85.333S303.128 384 256 384z"/><path d="M213.333 128h85.333c35.346 0 64-28.654 64-64V1.366A109.235 109.235 0 0 0 348.65.001H149.333v64c0 35.345 28.654 63.999 64 63.999z"/></svg>
  