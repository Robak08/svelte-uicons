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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M488.533 191.04a42.39 42.39 0 0 0-44.629 3.925L404.8 224c-5.544-54.472-51.38-95.931-106.133-96h-1.813l-87.936-87.915a63.489 63.489 0 0 0-45.248-18.752H21.333C9.551 21.333 0 30.885 0 42.667S9.551 64 21.333 64h142.336a21.458 21.458 0 0 1 15.083 6.251L236.501 128H106.667C47.786 128.071.071 175.786 0 234.667v170.667C.071 464.214 47.786 511.93 106.667 512h192c54.754-.069 100.589-41.528 106.133-96l39.04 29.099c18.851 14.138 45.595 10.318 59.733-8.533a42.665 42.665 0 0 0 8.533-25.6V229.184a42.41 42.41 0 0 0-23.573-38.144zM362.667 405.333c0 35.346-28.654 64-64 64h-192c-35.346 0-64-28.654-64-64V234.667c0-35.346 28.654-64 64-64h192c35.346 0 64 28.654 64 64v170.666zm106.666 5.483-64-47.701v-86.229l64-47.701v181.631z"/></svg>
  