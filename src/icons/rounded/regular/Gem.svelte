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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.147 9.471 22.36 8.4A5.885 5.885 0 0 0 17.632 6H6.383a5.892 5.892 0 0 0-4.662 2.309L.9 9.383a4.418 4.418 0 0 0 .548 5.937l7.99 7.707a3.82 3.82 0 0 0 2.55.969 3.9 3.9 0 0 0 2.6-1l7.936-7.633a4.39 4.39 0 0 0 .623-5.892Zm-2.4.107.787 1.074a2.388 2.388 0 0 1 .208.348h-4.791a6.616 6.616 0 0 0-.372-1.4l-.64-1.6h1.693a3.878 3.878 0 0 1 3.115 1.578Zm-8.757 10.51-2.769-6.27A4.642 4.642 0 0 1 8.995 13h5.952a4.354 4.354 0 0 1-.176.647ZM9.1 11a4.652 4.652 0 0 1 .157-.529L10.241 8h3.544l.937 2.343a4.8 4.8 0 0 1 .2.657ZM3.311 9.521A3.884 3.884 0 0 1 6.383 8h1.7L7.4 9.729A6.57 6.57 0 0 0 7.033 11H2.245a2.322 2.322 0 0 1 .247-.4Zm-.5 4.333a2.374 2.374 0 0 1-.6-.854h4.772a6.874 6.874 0 0 0 .387 1.576l2.827 6.4Zm10.96 7.16 2.854-6.614a6.573 6.573 0 0 0 .344-1.4H21.8a2.5 2.5 0 0 1-.633.9ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM16.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347ZM6.105 3.447A1 1 0 0 0 7.9 2.553l-1-2a1 1 0 1 0-1.79.894Z"/></svg>
  