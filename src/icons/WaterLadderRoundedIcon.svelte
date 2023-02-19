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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-water-ladder {customClass}"><path d="M5 18a1 1 0 0 0 1-1v-3h12v3a1 1 0 1 0 2 0V5c0-1.654 1.346-3 3-3a1 1 0 1 0 0-2c-2.757 0-5 2.243-5 5v1H6V5c0-1.654 1.346-3 3-3a1 1 0 1 0 0-2C6.243 0 4 2.243 4 5v12a1 1 0 0 0 1 1ZM18 8v4H6V8h12Zm5.668 14.978A3.985 3.985 0 0 1 21 24a4.372 4.372 0 0 1-3-1.226c-.778.754-1.872 1.226-3 1.226s-2.222-.472-3-1.226C11.222 23.528 10.128 24 9 24s-2.222-.472-3-1.226A4.372 4.372 0 0 1 3 24a3.985 3.985 0 0 1-2.668-1.022 1 1 0 1 1 1.336-1.488c.366.329.84.511 1.332.511.884 0 1.784-.58 2.053-1.322.094-.275.4-.677.923-.677s.881.416.97.677c.27.742 1.169 1.322 2.053 1.322s1.784-.58 2.053-1.322c.084-.246.397-.677.897-.677.531 0 .903.401.997.677.27.742 1.169 1.322 2.053 1.322s1.784-.58 2.053-1.322c.094-.275.414-.678.947-.678s.843.42.946.678c.292.733 1.169 1.322 2.053 1.322.492 0 .966-.182 1.332-.511a1 1 0 0 1 1.336 1.488Z"/></svg>
  