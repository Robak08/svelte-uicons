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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 11v3a1 1 0 0 1-2 0v-2.586l-4.293 4.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 10H8a1 1 0 0 1 0-2h3c1.654 0 3 1.346 3 3Zm10-2.687v7.319c0 .756-.42 1.437-1.097 1.775a1.979 1.979 0 0 1-2.078-.188.932.932 0 0 1-.106-.092l-1.756-1.754c-.194 2.581-2.333 4.628-4.962 4.628H5c-2.757 0-5-2.243-5-5v-6c0-2.757 2.243-5 5-5h9c2.618 0 4.748 2.029 4.959 4.594l1.756-1.772c.035-.035.071-.066.11-.096a1.976 1.976 0 0 1 2.078-.188A1.975 1.975 0 0 1 24 8.314ZM17 9c0-1.654-1.346-3-3-3H5C3.346 6 2 7.346 2 9v6c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3V9Zm5.025 6.605L22 8.366l-3 3.028v1.189l3.025 3.022Z"/></svg>
  