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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.94 14.658-3.005-8.265a3.99 3.99 0 0 0-2.829-2.523l-5.105-1.221V1c-.006-1.308-1.994-1.307-2 0v1.17l-4.47-1.068a2.98 2.98 0 0 0-3.59 1.869L.063 10.649c-.042.112-.063.653-.063.653 0 2.506 1.871 4.567 4.26 4.692a4.474 4.474 0 0 0 3.338-1.229A4.52 4.52 0 0 0 9 11.501s-.022-.745-.067-.859l-2.927-7.61L11 4.226V22H5c-1.308.006-1.307 1.994 0 2h14c1.308-.006 1.307-1.994 0-2h-6V4.705l4.641 1.11c.198.047.384.124.554.224l-3.135 8.619c-.04.109-.06.644-.06.644-.078 3.923 4.749 6.268 7.597 3.462A4.518 4.518 0 0 0 24 15.5s0-.538-.06-.842ZM6.544 10H2.443l2.024-5.401L6.545 10ZM19.5 8.301 21.572 14h-4.145l2.072-5.699Z"/></svg>
  