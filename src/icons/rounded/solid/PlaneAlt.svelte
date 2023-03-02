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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.286 10.058A2.992 2.992 0 0 0 21 9h-3.42l-4.267-7.454a2.883 2.883 0 0 0-4.807-.425 2.688 2.688 0 0 0-.363 2.426L10.083 9H5.532L4.116 7.1A2.43 2.43 0 0 0 2.079 6 2.075 2.075 0 0 0 .126 8.788L2 12 .126 15.212A2.075 2.075 0 0 0 2.075 18a2.43 2.43 0 0 0 2.037-1.1l1.42-1.9h4.551l-1.94 5.453a2.688 2.688 0 0 0 .363 2.426 2.883 2.883 0 0 0 4.807-.425L17.58 15H21a3.011 3.011 0 0 0 2.286-4.942Z"/></svg>
  