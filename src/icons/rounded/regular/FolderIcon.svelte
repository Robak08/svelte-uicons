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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 3h-6.528a1.019 1.019 0 0 1-.447-.1L8.869 1.316A3.014 3.014 0 0 0 7.528 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5ZM5 3h2.528a1.019 1.019 0 0 1 .447.1l3.156 1.579A3.014 3.014 0 0 0 12.472 5H19a3 3 0 0 1 2.779 1.882L2 6.994V6a3 3 0 0 1 3-3Zm14 18H5a3 3 0 0 1-3-3V8.994l20-.113V18a3 3 0 0 1-3 3Z"/></svg>
  