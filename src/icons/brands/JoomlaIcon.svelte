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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m9.202 16.983 2.367-2.369L6.23 9.279a1.974 1.974 0 0 1 .004-2.788 1.97 1.97 0 0 1 2.785-.001l.184.184 2.37-2.368-.184-.184a5.318 5.318 0 0 0-4.98-1.416 3.21 3.21 0 1 0-3.878 3.652 5.319 5.319 0 0 0 1.332 5.29l5.339 5.335z"/><path d="M12.314 4.127a5.316 5.316 0 0 1 5.264-1.344 3.21 3.21 0 1 1 3.604 3.626 5.32 5.32 0 0 1-1.351 5.235l-.184.185-2.367-2.37.183-.184a1.967 1.967 0 1 0-2.781-2.78l-5.338 5.334-2.37-2.368 5.34-5.334z"/><path d="M17.463 14.943a1.966 1.966 0 1 1-2.781 2.781l-.182-.182-2.367 2.37.182.181a5.315 5.315 0 0 0 5.328 1.322 3.21 3.21 0 1 0 3.599-3.819 5.315 5.315 0 0 0-1.409-5.021L14.5 7.238l-2.37 2.367 5.333 5.338z"/><path d="m14.352 12.39 2.367 2.37-5.331 5.336a5.316 5.316 0 0 1-5.047 1.399 3.213 3.213 0 0 1-3.13 2.49 3.21 3.21 0 0 1-.741-6.335 5.316 5.316 0 0 1 1.393-5.079l.181-.181 2.37 2.368-.184.182a1.972 1.972 0 0 0 2.789 2.787l5.333-5.337z"/></svg>
  