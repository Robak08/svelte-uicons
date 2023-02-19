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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-calendar-xmark {customClass}"><path d="M15.707 13.707 13.414 16l2.293 2.293a.999.999 0 1 1-1.414 1.414L12 17.414l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 16l-2.293-2.293a.999.999 0 1 1 1.414-1.414L12 14.586l2.293-2.293a.999.999 0 1 1 1.414 1.414ZM24 7v12c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 1 1 2 0v1h1c2.757 0 5 2.243 5 5ZM2 7v1h20V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7Zm20 12v-9H2v9c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3Z"/></svg>
  